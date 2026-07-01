import { motion } from "motion/react";
import { CircularGallery, type GalleryItem } from "./ui/circular-gallery-2";

const galleryItems: GalleryItem[] = [
  { image: "https://picsum.photos/seed/mountain/800/600?grayscale", text: "Mountain" },
  { image: "https://picsum.photos/seed/forest/800/600?grayscale", text: "Forest" },
  { image: "https://picsum.photos/seed/coast/800/600?grayscale", text: "Coast" },
  { image: "https://picsum.photos/seed/aurora/800/600?grayscale", text: "Aurora" },
  { image: "https://picsum.photos/seed/architecture/800/600?grayscale", text: "Forms" },
  { image: "https://picsum.photos/seed/minimal/800/600?grayscale", text: "Minimal" },
  { image: "https://picsum.photos/seed/texture/800/600?grayscale", text: "Texture" },
  { image: "https://picsum.photos/seed/light/800/600?grayscale", text: "Light" },
  { image: "https://picsum.photos/seed/space/800/600?grayscale", text: "Space" },
  { image: "https://picsum.photos/seed/shape/800/600?grayscale", text: "Shape" },
  { image: "https://picsum.photos/seed/geometry/800/600?grayscale", text: "Geometry" },
  { image: "https://picsum.photos/seed/horizon/800/600?grayscale", text: "Horizon" },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="paper-grid relative overflow-hidden border-t border-[#161513]/15 px-4 py-20 text-[#161513] select-none sm:px-6 md:px-12 md:py-28"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 diagonal-hatch opacity-30" />

      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 border-b border-[#161513]/15 pb-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#161513]/50">(05) Gallery Grid</p>
          <h2 className="mt-3 font-display text-[17vw] uppercase leading-[0.78] tracking-[-0.06em] md:text-[7.8vw]">
            Visual
            <br />
            Archive
          </h2>
        </motion.div>

        <div className="relative h-[500px] w-full md:h-[600px]">
          <CircularGallery
            items={galleryItems}
            bend={3}
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>
    </section>
  );
}
