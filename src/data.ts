import { Project, TimelineItem } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "velsaro",
    number: "01",
    title: "VELSARO",
    role: "Full-Stack Developer",
    description: "A sleek, high-performance web platform designed for premium performance and elegant interactivity.",
    tags: ["React", "UI/UX", "Next.js", "Tailwind CSS"],
    visual: "/images/velsaro.png",
    link: "https://www.velsaro.in/"
  },
  {
    id: "nexcart-v1",
    number: "02",
    title: "NEXCART V1",
    role: "Full-Stack Developer",
    description: "A modern, highly responsive e-commerce interface delivering optimal conversion speeds and fluid transitions.",
    tags: ["React", "Tailwind CSS", "Vite", "Commerce API"],
    visual: "/images/nexcart.png",
    link: "https://nexcart-v1.vercel.app/"
  },
  {
    id: "oysnk",
    number: "03",
    title: "OYSNK",
    role: "Full-Stack Developer",
    description: "An interactive web application exploring clean UI elements, advanced CSS grid structures, and micro-animations.",
    tags: ["Next.js", "CSS Grid", "Interactions", "Tailwind"],
    visual: "/images/Osynk.png",
    link: "https://oysnk.vercel.app/"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024",
    title: "Foundation & Exploring Curiosities",
    description: "Nurtured a lifelong passion for Research & Development, experimenting to understand 'how things work' under the hood and studying core digital architectures."
  },
  {
    year: "2025",
    title: "MPSTME, NMIMS & Full-Stack Evolution",
    description: "Began pursuing B.Tech at MPSTME, NMIMS. Accelerated skills in full-stack engineering, crafting refined digital platforms like Velsaro, Nexcart v1, and Oysnk with robust backends."
  },
  {
    year: "2026",
    title: "Advanced Systems & Aesthetic Design",
    description: "Engineering fluid, responsive micro-interactions inspired by sci-fi and immersive game worlds, while building optimized, highly reliable web solutions."
  }
];
