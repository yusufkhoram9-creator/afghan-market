import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { LangContext } from "@/i18n";

const PHOTOS = [
  { src: "/images/fruit_stand.jpg", alt: "Afghan Market fruit and veg display out front", captionKey: "capFruitStand", testid: "gallery-img-fruit-stand", span: "sm:col-span-2", ratio: "aspect-[16/10]" },
  { src: "/images/aisle.jpg", alt: "Inside the aisles at Afghan Market", captionKey: "capAisle", testid: "gallery-img-aisle", span: "", ratio: "aspect-[4/3]" },
  { src: "/images/meat_counter.jpg", alt: "The halal butcher counter", captionKey: "capMeatCounter", testid: "gallery-img-meat-counter", span: "", ratio: "aspect-[4/3]" },
  { src: "/images/meat_chicken.jpg", alt: "Fresh chicken at the counter", captionKey: "capChicken", testid: "gallery-img-meat-chicken", span: "", ratio: "aspect-[4/3]" },
  { src: "/images/meat_lamb.jpg", alt: "Lamb leg and shoulder at the counter", captionKey: "capLamb", testid: "gallery-img-meat-lamb", span: "", ratio: "aspect-[4/3]" },
  { src: "/images/meat_chops.jpg", alt: "Lamb chops and beef at the counter", captionKey: "capChops", testid: "gallery-img-meat-chops", span: "", ratio: "aspect-[4/3]" },
  { src: "/images/freezer_aisle.jpg", alt: "Freezer aisle stocked floor to ceiling", captionKey: "capFreezer", testid: "gallery-img-freezer", span: "", ratio: "aspect-[4/3]" },
  { src: "/images/till_sweets.jpg", alt: "Sweets and treats at the till", captionKey: "capTill", testid: "gallery-img-till", span: "", ratio: "aspect-[4/3]" },
  { src: "/images/tins_aisle.jpg", alt: "Shelves of tins, rice and pantry goods", captionKey: "capTins", testid: "gallery-img-tins", span: "", ratio: "aspect-[4/3]" },
  { src: "/images/bread.jpg", alt: "Fresh Afghan naan bread", captionKey: "capNaan", testid: "gallery-img-bread", span: "sm:col-span-2", ratio: "aspect-[16/10]" },
];

export default function Gallery() {
  const [index, setIndex] = useState(null);
  const { t } = useContext(LangContext);

  const prev = () => setIndex((index - 1 + PHOTOS.length) % PHOTOS.length);
  const next = () => setIndex((index + 1) % PHOTOS.length);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const selected = index !== null ? PHOTOS[index] : null;

  return (
    <section data-testid="gallery-section" className="relative bg-[#f5efe3] px-5 sm:px-10 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-meta text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#9e2a2b] mb-5"
          data-testid="gallery-eyebrow"
        >
          {t("galleryEyebrow")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-[#0c2e24] tracking-tight text-3xl sm:text-5xl mb-12 sm:mb-16"
          data-testid="gallery-heading"
        >
          {t("galleryHeading")}
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {PHOTOS.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`group cursor-pointer ${p.span}`}
              onClick={() => setIndex(i)}
              data-testid={`${p.testid}-tile`}
            >
              <div className={`overflow-hidden rounded-2xl shadow-xl shadow-[#0c2e24]/15 border border-[#0c2e24]/10 ${p.ratio}`}>
                <motion.img
                  src={p.src}
                  alt={p.alt}
                  data-testid={p.testid}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-meta text-[10px] uppercase tracking-[0.25em] text-[#0c2e24]/60">
                {t(p.captionKey)}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0c2e24]/95 backdrop-blur-sm p-4 sm:p-10"
            onClick={() => setIndex(null)}
            data-testid="lightbox-overlay"
          >
            <button
              type="button"
              onClick={() => setIndex(null)}
              data-testid="lightbox-close-btn"
              aria-label="Close photo"
              className="absolute top-5 right-5 z-10 rounded-full bg-[#faf7f2] p-3 text-[#0c2e24] transition-transform duration-300 hover:scale-110"
            >
              <X size={20} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              data-testid="lightbox-prev-btn"
              aria-label="Previous photo"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 rounded-full bg-[#faf7f2] p-3 text-[#0c2e24] transition-transform duration-300 hover:scale-110"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              data-testid="lightbox-next-btn"
              aria-label="Next photo"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 rounded-full bg-[#faf7f2] p-3 text-[#0c2e24] transition-transform duration-300 hover:scale-110"
            >
              <ChevronRight size={22} />
            </button>
            <motion.figure
              key={selected.src}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={selected.alt}
                data-testid="lightbox-image"
                className="max-h-[80vh] w-auto max-w-full rounded-xl shadow-2xl"
              />
              <figcaption className="mt-4 text-center font-meta text-[11px] uppercase tracking-[0.3em] text-[#faf7f2]/80" data-testid="lightbox-caption">
                {t(selected.captionKey)} · {index + 1}/{PHOTOS.length}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
