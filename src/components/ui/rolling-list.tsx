import * as React from "react";
import { cn } from "../../lib/utils";

interface ListItem {
  id: number;
  title: string;
  category: string;
  src: string;
  alt: string;
  accent: string;
  description?: string;
}

interface RollingTextItemProps {
  item: ListItem;
}

function RollingTextItem(props: RollingTextItemProps & { key?: React.Key }) {
  const { item } = props;
  return (
    <div className="group relative w-full cursor-pointer border-b border-[#161513]/12 py-6 last:border-b-0">
      <div className="relative overflow-hidden h-[60px] md:h-20">
        <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          <div className="h-[60px] md:h-20 flex items-center">
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter text-[#161513]">
              {item.title}
            </h2>
          </div>
          <div className="h-[60px] md:h-20 flex items-center">
            <h2
              className="text-5xl md:text-7xl font-display uppercase tracking-tighter italic"
              style={{ color: item.accent }}
            >
              {item.title}
            </h2>
          </div>
        </div>
      </div>

      <span className="absolute top-8 right-0 text-xs font-mono uppercase tracking-widest text-[#161513]/40 transition-opacity duration-300 group-hover:opacity-0 hidden md:block">
        {item.category}
      </span>

      {item.description && (
        <p className="mt-2 text-xs font-mono leading-relaxed text-[#161513]/55 max-w-md">
          {item.description}
        </p>
      )}

      <div
        className={cn(
          "pointer-events-none absolute right-0 top-1/2 z-20 h-40 w-56 -translate-y-1/2 overflow-hidden rounded-xl shadow-[6px_6px_0_#161513] md:h-60 md:w-96",
          "transition-all duration-500 ease-out",
          "opacity-0 scale-95 rotate-3 translate-x-4",
          "group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:translate-x-0"
        )}
      >
        <div className="relative h-full w-full">
          <img
            src={item.src}
            alt={item.alt}
            className="h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
          />
          <div
            className="absolute inset-0 mix-blend-overlay"
            style={{ backgroundColor: item.accent, opacity: 0.15 }}
          />
        </div>
      </div>
    </div>
  );
}

interface RollingTextListProps {
  items: ListItem[];
}

function RollingTextList({ items }: RollingTextListProps) {
  return (
    <div className="w-full flex flex-col">
      {items.map((item) => (
        <RollingTextItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export { RollingTextList };
export type { ListItem };
