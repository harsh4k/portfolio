import { Project, TimelineItem } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "velsaro",
    number: "01",
    title: "VELSARO",
    role: "Frontend Developer",
    description: "Luxury fragrance e-commerce platform combining modern frontend development, secure authentication, database integration and scalable application architecture.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vite"],
    visual: "/images/velsaro.png",
    link: "https://www.velsaro.in/"
  },
  {
    id: "nexcart",
    number: "02",
    title: "NEXCART",
    role: "Frontend Developer",
    description: "Modern commerce application focused on reusable components, responsive layouts, API integration and performance optimisation.",
    tags: ["React", "Tailwind CSS", "TypeScript", "REST API"],
    visual: "/images/nexcart.png",
    link: "https://nexcart-v1.vercel.app/"
  },
  {
    id: "oysnk",
    number: "03",
    title: "OYSNK",
    role: "Frontend Developer",
    description: "Experimental web application exploring interaction systems, creative development and modern software architecture.",
    tags: ["Next.js", "CSS", "GSAP", "Tailwind CSS"],
    visual: "/images/Osynk.png",
    link: "https://oysnk.vercel.app/"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024",
    title: "FUN FIRST",
    description: "Learning was chaotic. So was everything else. Wouldn't change it."
  },
  {
    year: "2025",
    title: "LOCKED IN",
    description: "Long nights. Hackathons. Good people. Great memories."
  },
  {
    year: "2026",
    title: "PERSPECTIVE",
    description: "Sometimes stepping away helps you move forward."
  }
];
