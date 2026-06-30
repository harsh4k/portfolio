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
      title: "GAMING",
      copy: "Immersive worlds, clean HUDs, and game mechanics have shaped how I think about interface design. Titles like Valorant and Dying Light continue to inspire the way I approach clarity, feedback and interaction.",
    },
    {
      icon: Compass,
      title: "SCI-FI & SPACE",
      copy: "Curiosity doesn't stop at software. Space reminds me how much there still is to discover—and keeps me asking better questions.",
    },
    {
      icon: Award,
      title: "SPORTS",
      copy: "Football, volleyball and badminton help me reset, stay competitive and keep a balanced mindset away from the screen.",
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
                Full Stack Developer
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#EEE9DC]/75">
                Building software with clarity, purpose and curiosity.
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
              {["NMIMS", "Computer Engineering", "Full Stack", "Software"].map((item) => (
                <span key={item} className="rounded-full border border-[#EEE9DC]/15 px-3 py-2 text-[#EEE9DC]/65">
                  {item}
                </span>
              ))}
            </div>
            <p className="max-w-4xl text-2xl font-semibold leading-tight tracking-tight md:text-4xl">
              Hi, I'm Harshit Chauhan. 👋
            </p>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-[#EEE9DC]/62 md:text-lg">
              I'm a first-year Computer Engineering student driven by a lifelong curiosity for how things work. Whether it's the logic behind software, the architecture of a system, or the mysteries of space, I've always enjoyed understanding what happens beneath the surface.
            </p>
            <p className="mt-6 text-base leading-relaxed text-[#EEE9DC]/62 md:text-lg">
              For me, becoming an engineer isn't just a career goal—it's something I'm actively working toward every day. I enjoy bridging design and engineering, building software that's both functional and intuitive, while constantly learning how to create reliable, scalable systems.
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
              Learn.
              <br />
              Build.
              <br />
              Repeat.
            </p>
            <p className="min-w-0 self-end text-sm leading-relaxed text-[#EEE9DC]/75">
              Every project teaches something new. I believe consistent iteration, clean engineering and curiosity lead to better software.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
