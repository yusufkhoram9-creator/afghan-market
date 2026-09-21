import { useEffect, useState } from "react";
import Lenis from "lenis";
import "@/App.css";
import { LangContext, RTL_LANGS, STR } from "@/i18n";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ribbon from "@/components/Ribbon";
import Bread from "@/components/Bread";
import HalalMeat from "@/components/HalalMeat";
import Gallery from "@/components/Gallery";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("afghan-market-lang") || "en");
  const t = (key) => STR[key]?.[lang] ?? STR[key]?.en ?? key;

  useEffect(() => {
    document.title = "Afghan Market — The Best Fresh Food · North Finchley";
    const lenis = new Lenis({ lerp: 0.09 });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("afghan-market-lang", lang);
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <div className="App">
        <Nav />
        <Hero />
        <Ribbon />
        <Bread />
        <HalalMeat />
        <Gallery />
        <Visit />
        <Footer />
      </div>
    </LangContext.Provider>
  );
}

export default App;
