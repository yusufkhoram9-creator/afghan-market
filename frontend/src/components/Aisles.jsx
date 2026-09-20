import { motion } from "framer-motion";

const AISLES = [
  { n: "A1", title: "The Hearth", items: "Tandoori Afghan naan, roghani & lavash" },
  { n: "A2", title: "Halal Butcher", items: "Fresh cut lamb, poultry & spices" },
  { n: "A3", title: "Sunlight Produce", items: "Seasonal herbs, pomegranates, figs & greens" },
  { n: "A4", title: "Silk Road Pantry", items: "Basmati, dried mulberries, saffron & tea" },
];

export default function Aisles() {
  return (
    <section data-testid="aisles-section" className="grain relative bg-[#0c2e24] px-5 sm:px-10 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-meta text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#e39832] mb-5"
          data-testid="aisles-eyebrow"
        >
          03 — The Aisles
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-[#faf7f2] tracking-tight text-3xl sm:text-5xl mb-12 sm:mb-16"
        >
          What dad stocks <span className="italic text-[#e39832]">every day</span>
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AISLES.map((a, i) => (
            <motion.div
              key={a.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              data-testid={`aisle-card-${a.n.toLowerCase()}`}
              className="rounded-2xl border border-[#faf7f2]/10 bg-[#1a533e]/40 p-6 sm:p-8 backdrop-blur-sm transition-colors duration-300 hover:border-[#e39832]/50"
            >
              <span className="font-meta text-[10px] tracking-[0.3em] text-[#e39832]">{a.n}</span>
              <h3 className="font-display italic text-xl sm:text-2xl text-[#faf7f2] mt-3 mb-2">{a.title}</h3>
              <p className="text-sm leading-relaxed text-[#faf7f2]/60">{a.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
