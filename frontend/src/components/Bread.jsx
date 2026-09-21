import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Flame, Wheat } from "lucide-react";
import StickmanRunner from "@/components/Stickman";
import { LangContext } from "@/i18n";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Bread() {
  const [stickman, setStickman] = useState(false);
  const { t } = useContext(LangContext);

  return (
    <section data-testid="bread-section" className="relative bg-[#faf7f2] px-5 sm:px-10 py-20 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl shadow-[#0c2e24]/25 border border-[#0c2e24]/10 group">
            <motion.img
              src="/images/bread.jpg"
              alt="Fresh Afghan naan bread sprinkled with nigella seeds"
              data-testid="bread-photo-naan"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[8/9] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 sm:-right-6 rotate-[-4deg] rounded-xl bg-[#0c2e24] px-5 py-3 shadow-xl" data-testid="bread-freshness-stamp">
            <p className="font-meta text-[10px] uppercase tracking-[0.25em] text-[#e39832] flex items-center gap-2">
              <Flame size={12} /> {t("freshStamp")}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={reveal} className="font-meta text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#9e2a2b] mb-5" data-testid="bread-eyebrow">
            {t("breadEyebrow")}
          </motion.p>
          <motion.h2
            variants={reveal}
            data-testid="bread-heading-fresh-bread"
            className="font-display font-bold text-[#0c2e24] tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl"
          >
            {t("breadHeading")}
          </motion.h2>
          <motion.p variants={reveal} className="mt-6 text-base sm:text-lg leading-relaxed text-[#0c2e24]/85 max-w-md">
            {t("breadSub")}
          </motion.p>
          <motion.div variants={reveal} className="mt-9">
            <button
              type="button"
              onClick={() => !stickman && setStickman(true)}
              data-testid="bread-subtext-grab-it-bag-it-go"
              className="inline-flex items-center gap-3 rounded-full bg-[#ba2d2d] px-7 py-4 font-display text-xl sm:text-2xl text-[#faf7f2] shadow-lg shadow-[#9e2a2b]/30 rotate-[-2deg] transition-transform duration-300 hover:rotate-0 hover:scale-105 cursor-pointer"
            >
              <Wheat size={20} />
              {t("grabBadge")}
            </button>
          </motion.div>
        </motion.div>
      </div>
      {stickman && <StickmanRunner onDone={() => setStickman(false)} />}
    </section>
  );
}
