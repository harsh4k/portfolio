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
      className="paper-grid relative min-h-[92vh] overflow-hidden px-4 py-8 text-[#161513] select-none sm:px-6 md:px-12"
    >
      <div className="pointer-events-none absolute right-[8vw] top-20 hidden h-52 w-44 diagonal-hatch opacity-80 md:block" />
      <div className="pointer-events-none absolute bottom-12 left-[6vw] hidden h-28 w-28 rounded-full border border-[#161513]/20 md:block" />

      <div className="mx-auto grid min-h-[80vh] max-w-[1600px] grid-cols-1 content-center gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="relative z-10 flex flex-col justify-center lg:col-span-8">
          <motion.div style={{ y: titleY }} className="pt-6 lg:pt-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#161513]/15 bg-[#EEE9DC] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em]">
              <span className="h-2 w-2 rounded-full bg-[#C9FF3D]" />
              Frontend engineer / Creative developer
            </div>
            <h1 className="font-display text-[18vw] uppercase leading-[0.78] tracking-[-0.04em] text-[#161513] sm:text-[15vw] lg:text-[9.6vw]">
              Harshit
              <br />
              Chauhan
            </h1>
          </motion.div>
        </div>

        <div className="relative z-20 flex flex-col justify-center gap-4 lg:col-span-4">
          <motion.div
            style={{ y: imageY }}
            className="relative overflow-hidden rounded-[28px] border-[10px] border-[#161513] bg-[#11110F] p-3 shadow-[18px_18px_0_#F13A18]"
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
                <p className="font-display text-xl uppercase leading-[1.1]">Frontend Engineer<br />Creative Developer<br />UI Systems Builder</p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#161513]/60">
                  I build modern web experiences that combine clean engineering, thoughtful design, and smooth interactions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-4 border-t border-[#161513]/15 pt-5 sm:grid-cols-3 lg:col-span-12">
          <div className="rounded-3xl bg-[#161513] p-5 text-[#EEE9DC]">
            <Code2 className="mb-6 h-5 w-5 text-[#C9FF3D]" />
            <p className="font-display text-2xl uppercase leading-none">Currently exploring</p>
            <div className="mt-2 space-y-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[#EEE9DC]/55">
              <p>Creative Development / Three.js / GSAP</p>
              <p>Performance-first Frontends / Scalable UI</p>
              <p>AI-assisted Development Workflows</p>
            </div>
          </div>
          <div className="rounded-3xl border border-[#161513]/15 bg-[#EEE9DC] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#161513]/50">Current focus</p>
            <p className="mt-8 text-sm leading-relaxed text-[#161513]/75">
              I'm currently focused on building production-ready frontend applications while improving my understanding of backend architecture, motion design, and scalable software systems.
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
        </div>
      </div>
    </section>
  );
}
