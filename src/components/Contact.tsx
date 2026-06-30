import { useState } from "react";
import { ArrowUpRight, Copy, Github, Globe, Instagram, MapPin } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const socialLinks = [
    {
      label: "GITHUB",
      icon: Github,
      address: "@harshit-chauhan",
      url: "https://github.com/harshit-chauhan",
      copy: false,
    },
    {
      label: "LINKEDIN",
      icon: Globe,
      address: "Harshit Chauhan",
      url: "https://www.linkedin.com/in/harshit-chauhan/",
      copy: false,
    },
    {
      label: "INSTAGRAM",
      icon: Instagram,
      address: "@harshit_chauhan",
      url: "https://www.instagram.com/harshit_chauhan/",
      copy: true,
    },
  ];

  const handleClick = (link: typeof socialLinks[0]) => {
    if (link.copy) {
      navigator.clipboard.writeText(link.address);
      setCopied(link.label);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  return (
    <footer
      id="contact"
      className="dark-grid relative min-h-screen overflow-hidden border-t border-[#EEE9DC]/10 px-4 py-8 text-[#EEE9DC] select-none sm:px-6 md:px-12"
    >
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1600px] flex-col justify-between gap-12">
        <div className="flex items-start justify-between border-b border-[#EEE9DC]/10 pb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#EEE9DC]/50">
          <span>(05) Connect Layer</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3" />
            Remote / Worldwide
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-[#C9FF3D] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#161513]">
              Open for collaboration
            </p>
            <h2 className="font-display text-[18vw] uppercase leading-[0.75] tracking-[-0.07em] sm:text-[14vw] lg:text-[10vw]">
              Make it
              <br />
              real.
            </h2>
          </div>

          <div className="rounded-[36px] bg-[#F13A18] p-5 text-[#EEE9DC] md:p-8">
            <p className="font-display text-4xl uppercase leading-[0.86] md:text-6xl">
              Bring the idea. I will bring the build.
            </p>
            <button
              onClick={() => {
                navigator.clipboard.writeText("harshitsinhchauhan250@gmail.com");
                setCopied("email");
                setTimeout(() => setCopied(null), 2000);
              }}
              className="mt-8 flex w-full items-center justify-between rounded-full bg-[#EEE9DC] px-5 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#161513] transition-transform hover:-translate-y-1"
            >
              {copied === "email" ? "Email copied" : "Copy email"}
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-3 border-t border-[#EEE9DC]/10 pt-5 sm:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            const isCopied = copied === link.label;

            if (link.copy) {
              return (
                <button
                  key={link.label}
                  onClick={() => handleClick(link)}
                  className="group rounded-[24px] border border-[#EEE9DC]/10 p-4 text-left transition-all hover:bg-[#EEE9DC] hover:text-[#161513]"
                >
                  <div className="mb-12 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-55">{link.label}</span>
                    {isCopied ? (
                      <span className="flex items-center gap-1 font-mono text-[8px] uppercase tracking-[0.14em] text-[#C9FF3D]">
                        <Copy className="h-3 w-3" /> Copied
                      </span>
                    ) : (
                      <Copy className="h-4 w-4 text-[#F13A18] opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </div>
                  <Icon className="h-6 w-6 opacity-75 transition-transform group-hover:scale-110" />
                </button>
              );
            }

            return (
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                key={link.label}
                className="group rounded-[24px] border border-[#EEE9DC]/10 p-4 transition-all hover:bg-[#EEE9DC] hover:text-[#161513]"
              >
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-55">{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#F13A18] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <Icon className="h-6 w-6 opacity-75 transition-transform group-hover:scale-110" />
              </a>
            );
          })}
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-[#EEE9DC]/10 pt-6 pb-4 font-mono text-[9px] uppercase tracking-[0.18em] text-[#EEE9DC]/42 sm:flex-row">
          <span>Designed and coded by Harshit Chauhan</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-left hover:text-[#EEE9DC]">
            Back to top
          </button>
          <span>2026 portfolio system</span>
        </div>
      </div>
    </footer>
  );
}
