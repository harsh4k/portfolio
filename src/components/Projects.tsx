import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section
      id="work"
      className="paper-grid relative overflow-hidden border-t border-[#161513]/15 px-4 py-20 text-[#161513] select-none sm:px-6 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex flex-col justify-between gap-5 border-b border-[#161513]/15 pb-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#161513]/50">(02) Selected Work</p>
            <h2 className="mt-3 font-display text-[17vw] uppercase leading-[0.78] tracking-[-0.06em] sm:text-[12vw] md:text-[8vw]">
              Build
              <br />
              Board
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#161513]/62">
            Projects that pushed my skills further. Each one taught me something about architecture, performance, or interaction design.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={project.id}
              id={`project-item-${project.id}`}
              className={`group relative z-10 flex min-h-[520px] flex-col overflow-hidden rounded-[32px] border border-[#161513]/20 bg-[#EEE9DC] transition-transform hover:-translate-y-1 hover:z-20 ${
                index === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center justify-between border-b border-[#161513]/15 p-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#161513]/55">
                <span>{project.number}</span>
                <span>{project.role}</span>
                <ArrowUpRight className="h-4 w-4 text-[#F13A18] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div className="relative m-4 aspect-[4/3] overflow-hidden rounded-[24px] bg-[#161513]">
                <img
                  src={project.visual}
                  alt={project.title}
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute left-3 top-3 rounded-full bg-[#C9FF3D] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#161513]">
                  Live project
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-4 pt-0">
                <div>
                  <h3 className="font-display text-5xl uppercase leading-[0.82] tracking-[-0.04em] md:text-6xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#161513]/65">{project.description}</p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#161513]/15 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#161513]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-5 rounded-[32px] bg-[#161513] p-5 text-[#EEE9DC] md:p-8">
          <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <p className="font-display text-[14vw] uppercase leading-[0.78] tracking-[-0.06em] md:text-[6.5vw]">
              More reps.
              <br />
              Better taste.
            </p>
            <p className="text-sm leading-relaxed text-[#EEE9DC]/65">
              Every project leaves me with something valuable—better architecture, stronger problem solving, cleaner code or a new perspective. Progress comes from building consistently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
