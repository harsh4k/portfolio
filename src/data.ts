import { Project, TimelineItem } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "velsaro",
    number: "01",
    title: "VELSARO",
    role: "Frontend Developer",
    description: "Luxury fragrance e-commerce platform built around premium branding, immersive interactions, and a scalable frontend architecture. Designed to translate a luxury retail experience into a fast and modern web application.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vite"],
    visual: "/images/velsaro.png",
    link: "https://www.velsaro.in/"
  },
  {
    id: "nexcart",
    number: "02",
    title: "NEXCART",
    role: "Frontend Developer",
    description: "An e-commerce interface focused on reusable components, responsive layouts, performance optimization, and conversion-driven design patterns.",
    tags: ["React", "Tailwind CSS", "TypeScript", "REST API"],
    visual: "/images/nexcart.png",
    link: "https://nexcart-v1.vercel.app/"
  },
  {
    id: "oysnk",
    number: "03",
    title: "OYSNK",
    role: "Frontend Developer",
    description: "An experimental UI project exploring modern layouts, advanced CSS architecture, motion design, and interaction systems.",
    tags: ["Next.js", "CSS", "GSAP", "Tailwind CSS"],
    visual: "/images/Osynk.png",
    link: "https://oysnk.vercel.app/"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024",
    title: "Foundation",
    description: "Started learning programming fundamentals. Built my first websites using HTML, CSS and JavaScript. Discovered UI/UX design and frontend development."
  },
  {
    year: "2025",
    title: "Building Real Projects",
    description: "Started Computer Engineering at NMIMS. Learned React, TypeScript and modern frontend workflows. Built multiple production-level projects including Velsaro. Explored Three.js, GSAP and modern interaction design."
  },
  {
    year: "2026",
    title: "Current Direction",
    description: "Building more production-ready applications. Learning backend architecture and scalable systems. Looking for opportunities to contribute to impactful products through internships and freelance work."
  }
];
