import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, MapPin, Train, Bus } from "lucide-react";
import { ADDRESS, MAPS_URL } from "@/constants";
import { LangContext } from "@/i18n";

const isShopOpen = () => {
  const hour = Number(
    new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/London", hour: "numeric", hour12: false }).format(new Date())
  );
  return hour >= 7 && hour < 24;
};

export default function Visit() {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(isShopOpen());
  const { t } = useContext(LangContext);

  useEffect(() => {
    const timer = setInterval(() => setOpen(isShopOpen()), 60000);
    return () => clearInterval(timer);
  }, []);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(`${ADDRESS}, London`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section data-testid="address-section" className="relative bg-[#faf7f2] px-5 sm:px-10 py-20 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-meta text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#9e2a2b] mb-5"
          data-testid="visit-eyebrow"
        >
          {t("visitEyebrow")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 mb-8 ${
            open ? "border-[#1a533e]/25 bg-white" : "border-[#9e2a2b]/30 bg-white"
          }`}
          data-testid="store-status-badge"
        >
          <span className="relative flex h-2 w-2">
            <span className={`pulse-dot absolute inline-flex h-full w-full rounded-full ${open ? "bg-[#1a533e]" : "bg-[#ba2d2d]"}`} />
            <span className={`relative inline-flex h-2 w-2 rounded-full ${open ? "bg-[#1a533e]" : "bg-[#ba2d2d]"}`} />
          </span>
          <span className="font-meta text-[10px] uppercase tracking-[0.2em] text-[#0c2e24]">
            {open ? t("statusOpen") : t("statusClosed")}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          data-testid="store-address-text"
          className="font-display font-bold text-[#0c2e24] tracking-tight leading-[1.08] text-3xl sm:text-5xl lg:text-6xl"
        >
          775 High Rd, <span className="text-[#ba2d2d]">N12 8JY</span>,
          <br className="hidden sm:block" /> North Finchley
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-meta text-[11px] uppercase tracking-[0.2em] text-[#0c2e24]/60"
          data-testid="transit-info"
        >
          <span className="flex items-center gap-2"><Train size={14} className="text-[#1a533e]" /> Woodside Park · 0.6 mi</span>
          <span className="flex items-center gap-2"><Bus size={14} className="text-[#1a533e]" /> Buses 125 · 134 · 221 · 263</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="get-directions-google-maps-btn"
            className="group flex items-center gap-3 rounded-full bg-[#ba2d2d] px-9 py-5 font-meta text-xs uppercase tracking-[0.25em] text-[#faf7f2] shadow-xl shadow-[#9e2a2b]/30 transition-all duration-300 hover:bg-[#9e2a2b] hover:shadow-2xl hover:-translate-y-0.5"
          >
            <MapPin size={16} className="transition-transform duration-300 group-hover:scale-125" />
            {t("getDirections")}
          </a>
          <button
            onClick={copyAddress}
            data-testid="copy-address-button"
            className="flex items-center gap-2 rounded-full border border-[#0c2e24]/25 px-7 py-5 font-meta text-xs uppercase tracking-[0.25em] text-[#0c2e24] transition-colors duration-300 hover:border-[#0c2e24] hover:bg-[#0c2e24] hover:text-[#faf7f2]"
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? t("copied") : t("copyAddress")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
