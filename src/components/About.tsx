import { motion } from "motion/react";
import { Award, Compass, Gamepad2, Orbit } from "lucide-react";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const notes = [
    {
      icon: Gamepad2,
      title: "Game UI",
      copy: "Valorant-like clarity, survival-game atmosphere, and menus that feel engineered.",
    },
    {
      icon: Compass,
      title: "Space",
      copy: "Big unknowns, quiet discipline, and that constant pull to understand the system.",
    },
    {
      icon: Award,
      title: "Sports",
      copy: "Football, volleyball, badminton: movement, timing, stamina, reset.",
    },
  ];

  return (
    <section
      id="about"
      className="paper-grid relative overflow-hidden border-t border-[#161513]/15 px-4 py-20 text-[#161513] select-none sm:px-6 md:px-12 md:py-28"
    >
      <div className="mx-auto grid w-full max-w-[1600px] min-w-0 gap-6 lg:grid-cols-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeUp}
          className="min-w-0 lg:col-span-5"
        >
          <div className="sticky top-28 w-full min-w-0 max-w-full rounded-[32px] border border-[#161513]/20 bg-[#EEE9DC] p-5 shadow-[7px_7px_0_#161513] sm:shadow-[10px_10px_0_#161513]">
            <div className="mb-10 flex min-w-0 items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#161513]/55">
              <span>(01) About</span>
              <Orbit className="h-5 w-5 text-[#F13A18]" />
            </div>
            <h2 className="font-display text-[16vw] uppercase leading-[0.78] tracking-[-0.05em] sm:text-[11vw] lg:text-[6vw]">
              Who
              <br />
              I Am
            </h2>
            <div className="mt-8 rounded-3xl bg-[#161513] p-5 text-[#EEE9DC]">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#EEE9DC]/55">
                Frontend engineer / Computer engineering
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#EEE9DC]/75">
                I build things that work well and look intentional. My focus is on the frontend, but I care about the full system.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex min-w-0 flex-col gap-6 lg:col-span-7">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeUp}
            className="min-w-0 rounded-[32px] bg-[#161513] p-6 text-[#EEE9DC] md:p-10"
          >
            <div className="mb-12 flex min-w-0 flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.14em]">
              {["NMIMS", "Computer Engineering", "Frontend", "UI Systems"].map((item) => (
                <span key={item} className="rounded-full border border-[#EEE9DC]/15 px-3 py-2 text-[#EEE9DC]/65">
                  {item}
                </span>
              ))}
            </div>
            <p className="max-w-4xl text-2xl font-semibold leading-tight tracking-tight md:text-4xl">
              I'm a Computer Engineering student at NMIMS focused on building modern web applications where engineering meets design.
            </p>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-[#EEE9DC]/62 md:text-lg">
              My interests span frontend architecture, interactive interfaces, motion design, and scalable UI systems. I enjoy transforming complex ideas into clean, intuitive digital experiences that balance performance with aesthetics. Whether I'm building an e-commerce platform, experimenting with Three.js, or refining component systems, my goal remains the same: create products that feel as polished as they perform.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {notes.map((note) => {
              const Icon = note.icon;
              return (
                <motion.div
                  key={note.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  className="group min-w-0 rounded-[28px] border border-[#161513]/15 bg-[#EEE9DC] p-5 transition-transform hover:-translate-y-1"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <Icon className="h-5 w-5 text-[#F13A18]" />
                    <span className="h-8 w-8 rounded-full bg-[#C9FF3D]" />
                  </div>
                  <h3 className="font-display text-2xl uppercase leading-none">{note.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#161513]/62">{note.copy}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="grid min-w-0 gap-4 rounded-[32px] border border-[#161513]/15 bg-[#F13A18] p-5 text-[#EEE9DC] md:grid-cols-[1.4fr_0.6fr] md:p-8"
          >
            <p className="min-w-0 break-words font-display text-[clamp(2.4rem,11vw,4.5rem)] uppercase leading-[0.85] tracking-[-0.04em]">
              Build the thing. Then make it unmistakably yours.
            </p>
            <p className="min-w-0 self-end text-sm leading-relaxed text-[#EEE9DC]/75">
              Every project starts by solving a problem. The difference comes from execution—clear systems, refined interactions, and attention to details that people remember long after they leave the page.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
