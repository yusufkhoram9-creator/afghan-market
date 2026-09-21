import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ribbon from "@/components/Ribbon";
import Bread from "@/components/Bread";
import HalalMeat from "@/components/HalalMeat";
import Gallery from "@/components/Gallery";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

function App() {
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

  return (
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
  );
}

export default App;
