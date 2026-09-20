import { Heart } from "lucide-react";
import { ADDRESS } from "@/constants";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#0c2e24] px-5 sm:px-10 py-12 text-center">
      <p className="font-display italic text-xl sm:text-2xl text-[#faf7f2]" data-testid="footer-dedication">
        Made with <Heart size={16} className="inline text-[#ba2d2d] mx-1" fill="currentColor" /> by a proud kid, for dad
      </p>
      <p className="mt-4 font-meta text-[10px] uppercase tracking-[0.3em] text-[#faf7f2]/50">
        Afghan Market · {ADDRESS} · London
      </p>
    </footer>
  );
}
