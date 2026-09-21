import { motion } from "framer-motion";

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
    src: "/images/bread.jpg",
    alt: "Fresh Afghan naan bread",
    caption: "Naan straight from the tandoor",
    testid: "gallery-img-bread",
    span: "sm:col-span-2 sm:max-w-xl sm:mx-auto sm:w-full",
    ratio: "aspect-[4/3]",
  },
];

export default function Gallery() {
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
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`group ${p.span}`}
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
    </section>
  );
}
