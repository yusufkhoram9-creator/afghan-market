import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { MAPS_URL } from "@/constants";

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-10 py-4 bg-[#0c2e24]/85 backdrop-blur-md border-b border-white/10"
      data-testid="site-nav"
    >
      <a href="#top" className="flex items-baseline gap-2" data-testid="nav-logo">
        <span className="font-display text-lg sm:text-xl text-[#faf7f2] italic">Afghan Market</span>
        <span className="font-meta text-[10px] uppercase tracking-[0.25em] text-[#e39832]">N12</span>
      </a>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="nav-directions-btn"
        className="group flex items-center gap-2 rounded-full bg-[#ba2d2d] px-4 sm:px-5 py-2 font-meta text-[11px] uppercase tracking-[0.2em] text-[#faf7f2] transition-colors duration-300 hover:bg-[#9e2a2b]"
      >
        <MapPin size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        Directions
      </a>
    </motion.header>
  );
}
