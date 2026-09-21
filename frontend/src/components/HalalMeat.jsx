import { useContext } from "react";
import { motion } from "framer-motion";
import { Beef, Drumstick, Slice, Sparkles } from "lucide-react";
import { LangContext } from "@/i18n";

const MEATS = [
  { icon: Beef, key: "chipLamb", testid: "meat-tag-lamb" },
  { icon: Drumstick, key: "chipChicken", testid: "meat-tag-chicken" },
  { icon: Slice, key: "chipGoat", testid: "meat-tag-goat-mince" },
  { icon: Sparkles, key: "chipMore", testid: "meat-tag-many-more" },
];

export default function HalalMeat() {
  const { t } = useContext(LangContext);

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
          {t("meatEyebrow")}
        </motion.p>

        <div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-[#faf7f2] tracking-tight leading-[1.08] text-3xl sm:text-5xl"
              data-testid="meat-heading"
            >
              {t("meatHeading")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#faf7f2]/85"
              data-testid="hmc-certified-text"
            >
              {t("meatBody")}
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
                  key={m.key}
                  data-testid={m.testid}
                  className="flex items-center gap-2 rounded-full border border-[#faf7f2]/15 bg-[#1a533e]/40 px-5 py-2.5 font-meta text-[11px] uppercase tracking-[0.2em] text-[#faf7f2]/85 transition-colors duration-300 hover:border-[#e39832]/60"
                >
                  <m.icon size={14} className="text-[#e39832]" />
                  {t(m.key)}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
