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
    title: "ENERGY",
    description: "Still figuring things out. Still smiling anyway."
  },
  {
    year: "2025",
    title: "BUILD MODE",
    description: "This was the year ideas finally became things I could actually ship."
  },
  {
    year: "2026",
    title: "PERSPECTIVE",
    description: "Some answers don't appear behind a monitor."
  }
];
