import { motion } from "motion/react";
import { GithubCalendar } from "./ui/retro-space-shooter-git-hub-calendar";

export default function GitHubCalendarSection() {
  return (
    <section
      id="github"
      className="paper-grid relative overflow-hidden border-t border-[#161513]/15 px-4 py-20 text-[#161513] select-none sm:px-6 md:px-12 md:py-28"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 diagonal-hatch opacity-30" />

      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 border-b border-[#161513]/15 pb-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#161513]/50">(06) GitHub</p>
          <h2 className="mt-3 font-display text-[17vw] uppercase leading-[0.78] tracking-[-0.06em] md:text-[7.8vw]">
            Code
            <br />
            Activity
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#161513]/62">
            A year's worth of commits, contributions, and late-night fixes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <GithubCalendar
            username="harsh4k"
            cellSize={13}
            cellGap={4}
            startsOnSunday={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
