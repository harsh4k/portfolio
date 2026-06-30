import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Code2, Sparkle } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 800], [0, -90]);
  const imageY = useTransform(scrollY, [0, 800], [0, 55]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="paper-grid relative min-h-[92vh] overflow-x-hidden px-4 py-8 text-[#161513] select-none sm:px-6 md:px-12"
    >
      <div className="pointer-events-none absolute right-[8vw] top-20 hidden h-52 w-44 diagonal-hatch opacity-80 md:block" />
      <div className="pointer-events-none absolute bottom-12 left-[6vw] hidden h-28 w-28 rounded-full border border-[#161513]/20 md:block" />

      <div className="mx-auto grid min-h-[80vh] max-w-[1600px] grid-cols-1 content-center gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="relative z-10 flex flex-col justify-center lg:col-span-8">
          <motion.div style={{ y: titleY }} className="pt-6 lg:pt-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#161513]/15 bg-[#EEE9DC] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em]">
              <span className="h-2 w-2 rounded-full bg-[#C9FF3D]" />
              Full Stack Developer
            </div>
            <h1 className="font-display text-[15vw] uppercase leading-[0.78] tracking-[-0.04em] text-[#161513] sm:text-[13vw] lg:text-[9vw]">
              Harshit
              <br />
              Chauhan
            </h1>
          </motion.div>
        </div>

        <div className="relative z-20 flex flex-col justify-center gap-4 lg:col-span-4">
          <motion.div
            style={{ y: imageY }}
            className="relative overflow-hidden rounded-[28px] border-[10px] border-[#161513] bg-[#11110F] p-3 shadow-[18px_18px_0_#F13A18] max-lg:!transform-none"
          >
            <div className="mb-3 flex items-center justify-between rounded-full border border-[#EEE9DC]/20 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#EEE9DC]/75">
              <span>Personal OS</span>
              <span>2026</span>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-[#EEE9DC]/15 bg-[#11110F]">
              <img
                src="/images/profile.jpg"
                alt="Harshit Chauhan portrait"
                className="h-full w-full object-cover grayscale contrast-110"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-[#EEE9DC] p-3 text-[#161513]">
                <p className="font-display text-xl uppercase leading-[1.1]">Full Stack Developer</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#161513]/60">
                  Building software that solves real problems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-4 border-t border-[#161513]/15 pt-5 sm:grid-cols-3 lg:col-span-12"
        >
          <div className="rounded-3xl bg-[#161513] p-5 text-[#EEE9DC]">
            <Code2 className="mb-6 h-5 w-5 text-[#C9FF3D]" />
            <p className="font-display text-2xl uppercase leading-none">Currently exploring</p>
            <div className="mt-3 space-y-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-[#EEE9DC]/55">
              <p>• React Ecosystem</p>
              <p>• Node.js</p>
              <p>• PostgreSQL</p>
              <p>• System Design</p>
              <p>• Three.js</p>
              <p>• AI-assisted Development</p>
            </div>
          </div>
          <div className="rounded-3xl border border-[#161513]/15 bg-[#EEE9DC] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#161513]/50">Current focus</p>
            <p className="mt-8 text-sm leading-relaxed text-[#161513]/75">
              Currently building production-ready full stack applications while improving my understanding of backend systems, software architecture and scalable engineering.
            </p>
          </div>
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex min-h-40 flex-col justify-between rounded-3xl bg-[#F13A18] p-5 text-left text-[#EEE9DC] transition-transform hover:-translate-y-1"
          >
            <Sparkle className="h-5 w-5" />
            <span className="flex items-end justify-between font-display text-3xl uppercase leading-none">
              Let's Build
              <ArrowUpRight className="h-7 w-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
