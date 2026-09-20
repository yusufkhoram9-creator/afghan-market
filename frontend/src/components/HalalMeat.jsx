import { motion } from "framer-motion";
import { Beef, Drumstick, Slice, ChefHat } from "lucide-react";

const MEATS = [
  { icon: Beef, label: "Fresh Lamb" },
  { icon: Drumstick, label: "Chicken" },
  { icon: Slice, label: "Goat & Mince" },
  { icon: ChefHat, label: "Kebab Cuts" },
];

function HmcBadge() {
  return (
    <motion.svg
      viewBox="0 0 140 140"
      className="h-28 w-28 sm:h-36 sm:w-36 drop-shadow-2xl"
      whileHover={{ rotate: 8, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      data-testid="hmc-logo"
      role="img"
      aria-label="HMC Halal Monitoring Committee certified logo"
    >
      <circle cx="70" cy="70" r="68" fill="#0f5132" stroke="#e39832" strokeWidth="2.5" />
      <circle cx="70" cy="70" r="56" fill="none" stroke="#faf7f2" strokeWidth="1.5" strokeDasharray="3 4" />
      <circle cx="70" cy="70" r="42" fill="#faf7f2" />
      <text x="70" y="66" textAnchor="middle" fontFamily="'Bodoni Moda', serif" fontWeight="900" fontSize="30" fill="#0f5132">HMC</text>
      <text x="70" y="84" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="10" letterSpacing="2" fill="#9e2a2b">HALAL</text>
      <path id="hmc-arc" d="M 70,70 m -49,0 a 49,49 0 1,1 98,0 a 49,49 0 1,1 -98,0" fill="none" />
      <text fontFamily="'JetBrains Mono', monospace" fontSize="8.5" letterSpacing="2.5" fill="#faf7f2">
        <textPath href="#hmc-arc" startOffset="2%">HALAL MONITORING COMMITTEE • CERTIFIED •</textPath>
      </text>
    </motion.svg>
  );
}

export default function HalalMeat() {
  return (
    <section data-testid="meat-section" className="grain relative bg-[#0c2e24] px-5 sm:px-10 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-meta text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#e39832] mb-5"
          data-testid="meat-eyebrow"
        >
          03 — The Butcher Counter
        </motion.p>

        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-[#faf7f2] tracking-tight leading-[1.08] text-3xl sm:text-5xl"
              data-testid="meat-heading"
            >
              we have a lot of <span className="italic text-[#e39832]">meat options</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#faf7f2]/70"
              data-testid="hmc-certified-text"
            >
              and we are certified with <span className="font-semibold text-[#faf7f2]">HMC</span> — every cut is fresh, halal and prepared with care at our counter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              {MEATS.map((m) => (
                <span
                  key={m.label}
                  data-testid={`meat-tag-${m.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="flex items-center gap-2 rounded-full border border-[#faf7f2]/15 bg-[#1a533e]/40 px-5 py-2.5 font-meta text-[11px] uppercase tracking-[0.2em] text-[#faf7f2]/85 transition-colors duration-300 hover:border-[#e39832]/60"
                >
                  <m.icon size={14} className="text-[#e39832]" />
                  {m.label}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="justify-self-center"
          >
            <HmcBadge />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
