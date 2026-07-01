"use client";

import type { CSSProperties } from "react";
import { memo, useMemo, useState, useEffect, useId, useRef } from "react";
import { cn } from "../../lib/utils";

export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export type ContributionData = {
  [date: string]: {
    level: ContributionLevel;
    label?: string;
    count?: number;
  };
};

export type ThemeColors = {
  level0: string;
  level1: string;
  level2: string;
  level3: string;
  level4: string;
};

export type CellShape = "rounded" | "circle";

export type GithubCalendarProps = {
  username?: string;
  data?: ContributionData;
  startDate?: string;
  endDate?: string;
  startsOnSunday?: boolean;
  cellSize?: number;
  cellGap?: number;
  cellShape?: CellShape;
  theme?: "github" | ThemeColors;
  showMonthLabels?: boolean;
  showStats?: boolean;
  showLegend?: boolean;
  className?: string;
};

const THEMES: Record<string, ThemeColors> = {
  github: {
    level0: "#ffffff",
    level1: "#0e4429",
    level2: "#006d32",
    level3: "#26a641",
    level4: "#39d353",
  },
};

const DARK_THEMES: Record<string, ThemeColors> = {
  github: {
    level0: "#0a0a0a",
    level1: "#0e4429",
    level2: "#006d32",
    level3: "#26a641",
    level4: "#39d353",
  },
};

function parseDate(dateStr: string): Date {
  const parts = dateStr.split("-").map(Number);
  return new Date(parts[0]!, parts[1]! - 1, parts[2]!);
}

function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const FULL_MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function getOrdinalSuffix(day: number): string {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

function formatTooltipDate(dateStr: string): string {
  const date = parseDate(dateStr);
  const month = FULL_MONTH_NAMES[date.getMonth()]!;
  const day = date.getDate();
  return `${month} ${day}${getOrdinalSuffix(day)}`;
}

type APIResponse = {
  total: Record<string, number>;
  contributions: { date: string; count: number; level: number }[];
};

async function fetchContributions(username: string): Promise<ContributionData> {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}`,
  );
  if (!res.ok) {
    throw new Error(
      `Could not fetch contributions for "${username}" (${res.status})`,
    );
  }
  const json: APIResponse = await res.json();
  const result: ContributionData = {};
  for (const entry of json.contributions) {
    result[entry.date] = {
      level: Math.min(4, Math.max(0, entry.level)) as ContributionLevel,
      count: entry.count,
    };
  }
  return result;
}

function buildGrid(
  startDate: string,
  endDate: string,
  startsOnSunday: boolean,
): {
  weeks: (string | null)[][];
  monthLabels: { label: string; weekIndex: number }[];
  gridStart: string;
} {
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  const startDay = startsOnSunday ? 0 : 1;
  const startDow = start.getDay();
  const offset = (startDow - startDay + 7) % 7;
  const gridStart = addDays(start, -offset);
  const weeks: (string | null)[][] = [];
  const monthLabels: { label: string; weekIndex: number }[] = [];
  let current = new Date(gridStart);
  let weekIndex = 0;
  let lastMonth = -1;

  while (current <= end || (weeks.length > 0 && (weeks[weeks.length - 1]?.length ?? 0) < 7)) {
    const week: (string | null)[] = [];
    for (let d = 0; d < 7; d++) {
      const dateStr = formatDate(current);
      week.push(current >= start && current <= end ? dateStr : null);
      if (current >= start && current <= end && current.getMonth() !== lastMonth) {
        lastMonth = current.getMonth();
        monthLabels.push({ label: MONTH_NAMES[current.getMonth()]!, weekIndex });
      }
      current = addDays(current, 1);
    }
    weeks.push(week);
    weekIndex++;
    if (current > end && weeks.length > 0 && weeks[weeks.length - 1]?.every((d) => d === null || parseDate(d) > end)) break;
  }
  return { weeks, monthLabels, gridStart: formatDate(gridStart) };
}

type TooltipState = {
  visible: boolean;
  date: string;
  count: number | undefined;
  label: string | undefined;
  x: number;
  y: number;
};

export const GithubCalendar = memo(function GithubCalendar({
  username,
  data: dataProp,
  startDate,
  endDate,
  startsOnSunday = false,
  cellSize: cellSizeProp = 12,
  cellGap: cellGapProp = 3,
  cellShape = "rounded",
  theme = "github",
  showMonthLabels = true,
  showStats = true,
  showLegend = true,
  className,
}: GithubCalendarProps) {
  const id = useId();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(false);
  const [vw] = useState(() => typeof window !== "undefined" ? window.innerWidth : 1200);
  const cellSize = vw < 480 ? 6 : vw < 768 ? 8 : cellSizeProp;
  const cellGap = vw < 768 ? 2 : cellGapProp;

  useEffect(() => {
    const checkDark = () => {
      setIsDark(
        document.documentElement.classList.contains("dark") ||
          document.body.classList.contains("dark"),
      );
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const [fetchedData, setFetchedData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(!!username);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;
    setFetchedData(null);
    setFetchError(null);
    setLoading(true);
    fetchContributions(username)
      .then((d) => setFetchedData(d))
      .catch((e) => setFetchError(e instanceof Error ? e.message : String(e)))
      .finally(() => setLoading(false));
  }, [username]);

  const data: ContributionData = dataProp ?? fetchedData ?? {};
  const resolvedEnd = endDate ?? formatDate(new Date());
  const resolvedStart = useMemo(() => {
    if (startDate) return startDate;
    const d = parseDate(resolvedEnd);
    d.setFullYear(d.getFullYear() - 1);
    d.setDate(d.getDate() + 1);
    return formatDate(d);
  }, [startDate, resolvedEnd]);

  const activeColors = useMemo(() => {
    if (typeof theme === "object") return theme;
    return isDark ? DARK_THEMES.github : THEMES.github;
  }, [theme, isDark]);

  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false, date: "", count: undefined, label: undefined, x: 0, y: 0,
  });

  const { weeks, monthLabels, gridStart } = useMemo(
    () => buildGrid(resolvedStart, resolvedEnd, startsOnSunday),
    [resolvedStart, resolvedEnd, startsOnSunday],
  );

  const stats = useMemo(() => {
    const entries = Object.entries(data);
    const total = entries.reduce((sum, [, v]) => sum + (v.count ?? (v.level > 0 ? 1 : 0)), 0);
    const activeDays = entries.filter(([, v]) => v.level > 0).length;
    let maxStreak = 0;
    let cur = 0;
    const sorted = entries.filter(([, v]) => v.level > 0).map(([d]) => d).sort();
    for (let i = 0; i < sorted.length; i++) {
      if (i === 0) { cur = 1; maxStreak = 1; continue; }
      const prev = parseDate(sorted[i - 1]!);
      const curr = parseDate(sorted[i]!);
      if ((curr.getTime() - prev.getTime()) / 86400000 === 1) { cur++; maxStreak = Math.max(maxStreak, cur); }
      else cur = 1;
    }
    return { total, activeDays, maxStreak };
  }, [data]);

  const step = cellSize + cellGap;
  const monthLabelHeight = showMonthLabels ? 20 : 0;
  const svgWidth = weeks.length * step - cellGap;
  const svgHeight = monthLabelHeight + 7 * step - cellGap;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = Math.max(0, scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
    }
  }, [fetchedData, dataProp, cellSize, cellGap]);

  const cellRx = cellShape === "circle" ? cellSize / 2 : cellSize * 0.2;

  if (loading) {
    const step2 = cellSize + cellGap;
    return (
      <div className={cn("w-full max-w-full space-y-3 animate-pulse", className)}>
        <div className="flex gap-6"><div className="h-4 w-32 rounded bg-[#161513]/20" /><div className="h-4 w-20 rounded bg-[#161513]/20" /><div className="h-4 w-24 rounded bg-[#161513]/20" /></div>
        <div className="overflow-x-auto">
          <svg width={53 * step2 - cellGap} height={16 + 7 * step2 - cellGap} className="overflow-visible">
            {Array.from({ length: 53 }).map((_, wi) =>
              Array.from({ length: 7 }).map((_, di) => (
                <rect key={`${wi}-${di}`} x={wi * step2} y={16 + di * step2} width={cellSize} height={cellSize} rx={cellRx} className="fill-[#161513]/10" />
              )),
            )}
          </svg>
        </div>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className={cn("w-fit mx-auto flex items-center gap-2 rounded-md border border-[#F13A18]/30 bg-[#F13A18]/10 px-4 py-3 text-sm text-[#F13A18]", className)}>
        {fetchError}
      </div>
    );
  }

  return (
    <div className={cn("w-full max-w-full", className)}>
      <div className="w-full flex flex-col gap-3">
        <div
          ref={scrollRef}
          className="relative w-full overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as CSSProperties}
        >
          <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="overflow-visible">
            {showMonthLabels && (() => {
              const byWeek = new Map<number, string>();
              monthLabels.forEach(({ label, weekIndex }) => byWeek.set(weekIndex, label));
              const entries = Array.from(byWeek.entries());
              const valid: [number, string][] = [];
              for (let i = 0; i < entries.length; i++) {
                const [wi, label] = entries[i]!;
                const next = entries[i + 1];
                if (i === 0 && next && next[0] - wi < 3) continue;
                const last = valid[valid.length - 1];
                if (last && wi - last[0] < 3) continue;
                valid.push([wi, label]);
              }
              return valid.map(([wi, label]) => (
                <text key={label} x={wi * step} y={10} fontSize={14} fill={isDark ? "#fafafa" : "#161513"} fontFamily="inherit">{label}</text>
              ));
            })()}

            {weeks.map((week, wi) =>
              week.map((date, di) => {
                const entry = date ? data[date] : undefined;
                const level: ContributionLevel = entry?.level ?? 0;
                const cellTopY = monthLabelHeight + di * step;
                if (!date) {
                  const cellDate = formatDate(addDays(parseDate(gridStart), wi * 7 + di));
                  if (cellDate > resolvedEnd) return null;
                }
                return (
                  <rect
                    key={`${wi}-${di}`}
                    id={date ? `cell-${id}-${date}` : undefined}
                    x={wi * step}
                    y={cellTopY}
                    width={cellSize}
                    height={cellSize}
                    rx={cellRx}
                    fill={activeColors[`level${level}` as keyof ThemeColors]}
                    onMouseEnter={() => {
                      if (!date) return;
                      setTooltip({ visible: true, date, count: entry?.count, label: entry?.label, x: wi * step + cellSize / 2, y: cellTopY });
                    }}
                    onMouseLeave={() => setTooltip((t) => ({ ...t, visible: false }))}
                  />
                );
              }),
            )}
          </svg>

          {tooltip.visible && (() => {
            const count = tooltip.count ?? 0;
            const formattedDate = formatTooltipDate(tooltip.date);
            const tooltipText = tooltip.label
              ? `${tooltip.label} on ${formattedDate}.`
              : count === 0
                ? `No contributions on ${formattedDate}.`
                : `${count} contribution${count !== 1 ? "s" : ""} on ${formattedDate}.`;
            return (
              <div className="pointer-events-none absolute z-50 rounded bg-[#161513] px-2.5 py-1 text-[11px] font-medium text-[#EEE9DC] shadow-md whitespace-nowrap" style={{ left: tooltip.x, top: tooltip.y, transform: "translate(-50%, calc(-100% - 6px))" }}>
                {tooltipText}
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-[#161513] border-r border-b border-[#EEE9DC]/30" />
              </div>
            );
          })()}
        </div>

        <div className="flex items-center justify-between gap-x-4">
          {showLegend && (
            <div className="flex flex-wrap items-center gap-4 text-xs shrink-0 mt-0.5">
              <div className="flex items-center gap-1.5">
                <span className="text-[#161513]/50 text-[10px]">Less</span>
                {([0, 1, 2, 3, 4] as ContributionLevel[]).map((level) => (
                  <svg key={level} width={cellSize} height={cellSize}>
                    <rect width={cellSize} height={cellSize} rx={cellRx} fill={activeColors[`level${level}`]} />
                  </svg>
                ))}
                <span className="text-[#161513]/50 text-[10px]">More</span>
              </div>
            </div>
          )}

          {showStats && (
            <div className="flex flex-1 flex-wrap justify-end ml-auto text-sm">
              <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-1 text-[#161513]/60 hover:text-[#161513] transition-colors no-underline">
                <span className="font-semibold">{username}</span>
                <span>contributed</span>
                <span className="font-bold text-[#0e4429]">{stats.total.toLocaleString()}</span>
                <span>contributions this year</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

GithubCalendar.displayName = "GithubCalendar";

export default GithubCalendar;
