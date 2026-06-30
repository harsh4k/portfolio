import { Project, TimelineItem } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "velsaro",
    number: "01",
    title: "VELSARO",
    role: "Frontend Developer",
    description: "Luxury fragrance e-commerce platform focused on premium branding, immersive interactions and scalable frontend architecture.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vite"],
    visual: "/images/velsaro.png",
    link: "https://www.velsaro.in/"
  },
  {
    id: "nexcart",
    number: "02",
    title: "NEXCART",
    role: "Frontend Developer",
    description: "Modern commerce interface exploring reusable UI systems, responsive layouts and conversion-focused design.",
    tags: ["React", "Tailwind CSS", "TypeScript", "REST API"],
    visual: "/images/nexcart.png",
    link: "https://nexcart-v1.vercel.app/"
  },
  {
    id: "oysnk",
    number: "03",
    title: "OYSNK",
    role: "Frontend Developer",
    description: "Interactive UI experiment exploring motion, layout systems and modern frontend architecture.",
    tags: ["Next.js", "CSS", "GSAP", "Tailwind CSS"],
    visual: "/images/Osynk.png",
    link: "https://oysnk.vercel.app/"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024",
    title: "FOUNDATION",
    description: "The year curiosity became a habit. Learning, experimenting, breaking things—and remembering to have fun along the way."
  },
  {
    year: "2025",
    title: "LOCK-IN MODE",
    description: "Hackathons, long nights, debugging with friends and learning under pressure. Probably where I grew the fastest."
  },
  {
    year: "2026",
    title: "PERSPECTIVE",
    description: "The mountains remind me to slow down. The best ideas usually come after stepping away from the screen."
  }
];
