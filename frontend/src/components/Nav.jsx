import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { MAPS_URL } from "@/constants";
import { LangContext, LANGS } from "@/i18n";

export default function Nav() {
  const { lang, setLang, t } = useContext(LangContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bigText, setBigText] = useState(() => localStorage.getItem("afghan-market-big-text") === "1");

  useEffect(() => {
    document.documentElement.classList.toggle("big-text", bigText);
    localStorage.setItem("afghan-market-big-text", bigText ? "1" : "0");
  }, [bigText]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-10 py-4 bg-[#0c2e24]/85 backdrop-blur-md border-b border-white/10"
      data-testid="site-nav"
    >
      <a href="#top" className="flex items-baseline gap-2 whitespace-nowrap" data-testid="nav-logo">
        <span className="font-display text-lg sm:text-xl text-[#faf7f2] italic">Afghan Market</span>
        <span className="hidden sm:inline font-meta text-[10px] uppercase tracking-[0.25em] text-[#e39832]">N12</span>
      </a>
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => setBigText(!bigText)}
          data-testid="bigger-text-button"
          aria-pressed={bigText}
          aria-label="Toggle bigger text"
          title="Bigger text"
          className={`rounded-full border px-4 py-2 font-meta text-[11px] tracking-[0.1em] transition-colors duration-300 ${
            bigText
              ? "border-[#e39832] bg-[#e39832] text-[#0c2e24]"
              : "border-[#faf7f2]/30 text-[#faf7f2] hover:border-[#e39832] hover:text-[#e39832]"
          }`}
        >
          A<span className="text-sm font-bold align-top">+</span>
        </button>
        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="language-button"
            className="rounded-full border border-[#faf7f2]/30 px-3 sm:px-5 py-2 font-meta text-[11px] uppercase tracking-[0.2em] text-[#faf7f2] transition-colors duration-300 hover:border-[#e39832] hover:text-[#e39832] whitespace-nowrap"
          >
            🗣 language
          </button>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute end-0 mt-2 w-52 max-w-[calc(100vw-2.5rem)] rounded-xl bg-[#faf7f2] py-2 shadow-2xl border border-black/10 max-h-80 overflow-auto"
                data-testid="language-menu"
              >
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLang(l.code);
                      setMenuOpen(false);
                    }}
                    data-testid={`language-option-${l.code}`}
                    className={`block w-full px-4 py-2 text-start text-sm transition-colors duration-150 hover:bg-[#0c2e24]/10 ${
                      lang === l.code ? "font-bold text-[#9e2a2b]" : "text-[#0c2e24]"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="nav-directions-btn"
          className="group flex items-center gap-2 rounded-full bg-[#ba2d2d] px-4 sm:px-5 py-2 font-meta text-[11px] uppercase tracking-[0.2em] text-[#faf7f2] transition-colors duration-300 hover:bg-[#9e2a2b]"
        >
          <MapPin size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          <span className="hidden sm:inline">{t("navDirections")}</span>
        </a>
      </div>
    </motion.header>
  );
}
