// components/HeroLayeredSection.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const HeroLayeredSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.4]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Imagen de fondo */}
      <img
        src="https://i.imgur.com/9HAjD7F.jpeg"
        alt="Fondo agrícola"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Forma artística superpuesta */}
      <img
        src="https://i.imgur.com/B9XpDBj.png" 
        alt="Decoración visual"
        className="absolute z-[1000]  object-cover top-0 left-0 w-full h-full"
      />

      {/* Texto centrado */}
      {/*  mix-blend-difference */}
      <motion.h2
        style={{ opacity, scale }}
        className="uppercase scale-y-120 -translate-y-7 z-20 text-white text-13xl font-bold text-center pointer-events-none"
      >
        Agricultura
      </motion.h2>
    </section>
  );
};

export default HeroLayeredSection;
