import { motion } from "motion/react";
import { ArrowUpRight, Cloud } from "lucide-react";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      id="main-navigation"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 w-full border-b border-[#161513]/15 bg-[#EEE9DC]/92 px-4 py-3 backdrop-blur-md sm:px-6 md:px-12"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.14em] select-none sm:flex-row sm:gap-0">
        
        {/* Left Side Links */}
        <div className="order-2 flex w-full justify-center gap-2 sm:order-1 sm:w-1/3 sm:justify-start">
          <button
            onClick={() => scrollToSection("work")}
            className="rounded-full border border-[#161513]/15 px-3 py-2 text-[#161513] transition-colors hover:bg-[#161513] hover:text-[#EEE9DC] focus:outline-none"
            id="nav-link-work"
          >
            WORK
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="rounded-full border border-[#161513]/15 px-3 py-2 text-[#161513] transition-colors hover:bg-[#161513] hover:text-[#EEE9DC] focus:outline-none"
            id="nav-link-about"
          >
            ABOUT
          </button>
        </div>

        {/* Centered Anchor Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="order-1 flex w-full items-center justify-center gap-2 text-center font-display text-sm tracking-normal text-[#161513] transition-opacity hover:opacity-75 focus:outline-none sm:order-2 sm:w-1/3 md:text-base"
          id="nav-anchor"
        >
          <Cloud className="h-4 w-4 stroke-[2]" />
          HARSHIT.CLOUD
        </button>

        {/* Right Side Links */}
        <div className="order-3 flex w-full justify-center gap-2 text-right sm:w-1/3 sm:justify-end">
          <button
            onClick={() => scrollToSection("path")}
            className="rounded-full border border-[#161513]/15 px-3 py-2 text-[#161513] transition-colors hover:bg-[#161513] hover:text-[#EEE9DC] focus:outline-none"
            id="nav-link-path"
          >
            PATH
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="group flex items-center gap-2 rounded-full border border-[#F13A18] px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-[#F13A18] transition-all hover:bg-[#F13A18] hover:text-[#EEE9DC] hover:-translate-y-0.5 focus:outline-none"
            id="nav-link-contact"
          >
            <span className="w-0 overflow-hidden opacity-0 transition-all group-hover:w-4 group-hover:opacity-100">[</span>
            CONTACT
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="w-0 overflow-hidden opacity-0 transition-all group-hover:w-3 group-hover:opacity-100">]</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
