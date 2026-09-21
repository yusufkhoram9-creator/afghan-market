import { useContext } from "react";
import { Heart } from "lucide-react";
import { ADDRESS } from "@/constants";
import { LangContext } from "@/i18n";

export default function Footer() {
  const { t } = useContext(LangContext);

  return (
    <footer data-testid="site-footer" className="bg-[#0c2e24] px-5 sm:px-10 py-12 text-center">
      <p className="font-display text-xl sm:text-2xl text-[#faf7f2]" data-testid="footer-dedication">
        {t("dedication")}
        <Heart size={16} className="inline text-[#ba2d2d] mx-1" fill="currentColor" aria-hidden="true" />
      </p>
      <p className="mt-4 font-meta text-[10px] uppercase tracking-[0.3em] text-[#faf7f2]/50">
        Afghan Market · {ADDRESS} · London
      </p>
    </footer>
  );
}
