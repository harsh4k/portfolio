import { Project, Poster, Thought, TimelineItem } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "velsaro",
    number: "01",
    title: "VELSARO",
    category: "websites",
    role: "Frontend Developer",
    description: "Luxury fragrance e-commerce platform combining modern frontend development, secure authentication, database integration and scalable application architecture.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vite"],
    visual: "/images/velsaro.png",
    link: "https://www.velsaro.in/",
    detail: {
      cover: "/images/velsaro.png",
      paragraphs: [
        "A luxury fragrance e-commerce platform built from the ground up. From authentication to checkout, every component was designed with both aesthetics and performance in mind. The result is a shopping experience that feels as premium as the products it sells.",
        "Supabase handles the backend — user auth, product inventory, and order management are all managed through a robust PostgreSQL schema. Role-based access controls ensure the right people see the right data, while the real-time capabilities enable live inventory updates.",
        "The frontend is built with React and TypeScript, styled with Tailwind CSS. Every page is responsive, every transition is smooth, and every image is optimized for fast loading. The component library was built from scratch to ensure consistency across the entire platform.",
        "What started as a simple storefront evolved into a full-fledged e-commerce system with inventory tracking, admin dashboards, and a seamless user experience. This project taught me the importance of balancing feature richness with performance.",
      ],
    },
  },
  {
    id: "nexcart",
    number: "02",
    title: "NEXCART",
    category: "websites",
    role: "Frontend Developer",
    description: "Modern commerce application focused on reusable components, responsive layouts, API integration and performance optimisation.",
    tags: ["React", "Tailwind CSS", "TypeScript", "REST API"],
    visual: "/images/nexcart.png",
    link: "https://nexcart-v1.vercel.app/",
    detail: {
      cover: "/images/nexcart.png",
      paragraphs: [
        "A modern commerce application focused on reusable component architecture. The goal was to build a shopping experience that feels both familiar and fresh, with a clean design language that scales across the entire product catalog.",
        "API integration was a key focus — fetching products, managing cart state, and handling checkout flows all required careful state management. Custom hooks keep the logic clean and testable, while the REST API layer abstracts away backend complexity.",
        "The responsive layout adapts seamlessly from mobile to desktop, with careful attention to touch interactions and gesture-based navigation. Every breakpoint was considered, every edge case handled.",
        "Performance optimisation was a constant priority. Lazy loading, code splitting, and image optimisation keep the app snappy even on slower connections. The final build is lean, fast, and ready for production.",
      ],
    },
  },
  {
    id: "oysnk",
    number: "03",
    title: "OYSNK",
    category: "fun",
    role: "Frontend Developer",
    description: "Experimental web application exploring interaction systems, creative development and modern software architecture.",
    tags: ["Next.js", "CSS", "GSAP", "Tailwind CSS"],
    visual: "/images/Osynk.png",
    link: "https://oysnk.vercel.app/",
    detail: {
      cover: "/images/Osynk.png",
      paragraphs: [
        "An experimental playground where creative development meets interaction design. No constraints, no briefs — just pure exploration of what the web can do when you push beyond conventional patterns.",
        "The project experiments with scroll-triggered animations, dynamic layouts, and unconventional UI patterns. GSAP powers the motion, while CSS handles the visual polish. Every interaction was designed to surprise and delight.",
        "From cursor effects to page transitions, the goal was to create something that feels alive. The result is a digital experience that rewards exploration and challenges expectations.",
        "This project taught me that the best ideas often come from stepping outside the boundaries of conventional web development. Sometimes the most valuable thing you can build is something purely for the joy of building it.",
      ],
    },
  },
];

export const POSTERS: Poster[] = [
  {
    id: "poster-1",
    number: "04",
    image: "/images/p1.png",
    keywords: ["Grid", "Bold", "Minimal", "Contrast"],
    tagline: "Less is more — typography as structure.",
  },
  {
    id: "poster-2",
    number: "05",
    image: "/images/p2.jpg",
    keywords: ["Type", "Scale", "Rhythm", "Space"],
    tagline: "Let the letters breathe and the layout follow.",
  },
  {
    id: "poster-3",
    number: "06",
    image: "/images/p3.jpg",
    keywords: ["Mono", "Form", "Texture", "Layer"],
    tagline: "Shape and counter-shape in perfect balance.",
  },
  {
    id: "poster-4",
    number: "07",
    image: "https://picsum.photos/seed/poster-wave/800/1000?grayscale",
    keywords: ["Wave", "Motion", "Flow", "Gradient"],
    tagline: "Static on the surface. Moving underneath.",
  },
];

export const THOUGHTS: Thought[] = [
  {
    id: "thought-1",
    number: "01",
    image: "/images/t1.jpg",
    thought: "Build Over Theory — Ship projects, not tutorials. Every idea becomes something real, something deployed, something that works.",
    tag: "Motto",
  },
  {
    id: "thought-2",
    number: "02",
    image: "/images/t2.jpg",
    thought: "Attention to Detail — The premium feel isn't accidental. Typography, spacing, animation, layout — every pixel placed with intent.",
    tag: "Process",
  },
  {
    id: "thought-3",
    number: "03",
    image: "/images/t3.jpg",
    thought: "Curiosity Over Comfort — Linux, AI tooling, Three.js, GSAP, backends, new workflows. The stack grows when you stay curious.",
    tag: "Mindset",
  },
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
