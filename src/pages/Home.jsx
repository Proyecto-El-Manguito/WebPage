import React, { useRef, useEffect } from "react";
import Lenis from "lenis";

import video from "../assets/hero_video.mp4";
import piscina from "../assets/piscina.mp4";
import VideoHero from "../containers/home/VideoHero";
import OurHistoryCTA from "../containers/home/OurHistoryCTA";
import OurHistoryCTADemo from "../containers/home/OurHistoryCTADemo";
import ActivitiesCTA from "../containers/home/ActivitiesCTA";
import RestaurantCTA from "../containers/home/RestaurantCTA";
import GalleryCTA from "../containers/home/GalleryCTA";
import LocationAndMapCTA from "../containers/home/LocationAndMapCTA";
import AnimatedCards from "../containers/home/AnimatedCards";
import Footer from "../containers/home/Footer";

const imgArray = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
    title: "Montaña nevada",
    subtitle: "Un paisaje natural con montañas nevadas.",
    video: video,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    title: "Bosque al amanecer",
    subtitle: "Luz dorada entre los árboles.",
    video: piscina,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    title: "Desierto minimalista",
    subtitle: "Dunas suaves bajo el cielo azul.",
    video: video,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    title: "Cascada",
    subtitle: "Agua cayendo entre rocas cubiertas de musgo.",
    video: piscina,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    title: "Calle nocturna",
    subtitle: "Luces de ciudad reflejadas en el pavimento mojado.",
    video: video,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    title: "Playa tropical",
    subtitle: "Cielo rosa sobre el mar tranquilo.",
    video: piscina,
  },
];

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="overflow-hidd en">
      <VideoHero video={video} />
      <OurHistoryCTADemo />
      <AnimatedCards />
      <ActivitiesCTA video={piscina} imgArray={imgArray} />
      <div className="overflow-hidden">
        <GalleryCTA />
        <LocationAndMapCTA />
      </div>
      <Footer />
    </main>
  );
}
