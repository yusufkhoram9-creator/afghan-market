import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const PHOTOS = [
  {
    src: "/images/fruit_stand.jpg",
    alt: "Afghan Market fruit and veg display out front",
    caption: "This morning's fruit & veg",
    testid: "gallery-img-fruit-stand",
    span: "sm:col-span-2",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/images/aisle.jpg",
    alt: "Inside the aisles at Afghan Market",
    caption: "Inside the aisles",
    testid: "gallery-img-aisle",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/meat_counter.jpg",
    alt: "The halal butcher counter",
    caption: "The butcher counter",
    testid: "gallery-img-meat-counter",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/meat_chicken.jpg",
    alt: "Fresh chicken at the counter",
    caption: "Fresh chicken, cut daily",
    testid: "gallery-img-meat-chicken",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/meat_lamb.jpg",
    alt: "Lamb leg and shoulder at the counter",
    caption: "Lamb leg & shoulder",
    testid: "gallery-img-meat-lamb",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/freezer_aisle.jpg",
    alt: "Freezer aisle stocked floor to ceiling",
    caption: "Stocked floor to ceiling",
    testid: "gallery-img-freezer",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/bread.jpg",
    alt: "Fresh Afghan naan bread",
    caption: "Naan straight from the tandoor",
    testid: "gallery-img-bread",
    span: "sm:col-span-2",
    ratio: "aspect-[16/10]",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
          04 — The Shop In Pictures
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-[#0c2e24] tracking-tight text-3xl sm:text-5xl mb-12 sm:mb-16"
          data-testid="gallery-heading"
        >
          fresh from <span className="text-[#1a533e]">the stall</span>
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
              onClick={() => setSelected(p)}
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
                {p.caption}
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
            onClick={() => setSelected(null)}
            data-testid="lightbox-overlay"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              data-testid="lightbox-close-btn"
              aria-label="Close photo"
              className="absolute top-5 right-5 rounded-full bg-[#faf7f2] p-3 text-[#0c2e24] transition-transform duration-300 hover:scale-110"
            >
              <X size={20} />
            </button>
            <motion.figure
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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
                {selected.caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
