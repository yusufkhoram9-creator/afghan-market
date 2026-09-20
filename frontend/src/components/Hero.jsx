import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { MAPS_URL } from "@/constants";

const LINES = ["afghan market", "the best fresh food"];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} id="top" data-testid="hero-section" className="grain relative h-[100svh] overflow-hidden bg-[#0c2e24]">
      <motion.img
        src="/images/storefront.jpg"
        alt="Afghan Market storefront on High Road, North Finchley"
        data-testid="hero-storefront-image"
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c2e24] via-[#0c2e24]/70 to-[#0c2e24]/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c2e24]/85 via-[#0c2e24]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#0c2e24]/95 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end px-5 sm:px-10 pb-14 sm:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-meta text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#e39832] mb-4 sm:mb-6 [text-shadow:0_1px_12px_rgba(12,46,36,0.9)]"
          data-testid="hero-eyebrow"
        >
          01 — The Shopfront · High Road, North Finchley
        </motion.p>

        <h1
          data-testid="hero-heading-afghan-market"
          className="font-display font-black text-[#faf7f2] leading-[0.98] tracking-tight text-5xl sm:text-7xl lg:text-8xl [text-shadow:0_3px_28px_rgba(12,46,36,0.95)]"
        >
          {LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span
                className={`block ${i === 1 ? "italic text-[#e39832]" : ""}`}
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.55 + i * 0.18, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.7 }}
          className="mt-7 sm:mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-directions-btn"
            className="group flex items-center gap-2 rounded-full bg-[#faf7f2] px-6 py-3 font-meta text-[11px] uppercase tracking-[0.2em] text-[#0c2e24] transition-colors duration-300 hover:bg-[#e39832]"
          >
            <MapPin size={14} className="transition-transform duration-300 group-hover:rotate-12" />
            Get Directions
          </a>
          <span className="font-meta text-[10px] uppercase tracking-[0.25em] text-[#faf7f2]/70 border border-[#faf7f2]/25 rounded-full px-5 py-3" data-testid="hero-halal-badge">
            Halal · Bakery · Groceries
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 right-6 sm:right-10 z-10 text-[#faf7f2]/60"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
