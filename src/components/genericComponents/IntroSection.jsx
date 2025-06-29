import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { CustomContainer } from "../../components/titleComponents/CustomContainer";
import { ShowAnimateComponent } from "./ShowAnimateComponent";
import MaskText from "./MaskText";

export default function IntroSection({
  image,
  title,
  backgroundOpacity = 0.65,
  height = "h-[80vh]",
  overlayTextColor = "text-white",
  backgroundDark = "bg-black",
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center min-h-[400px] ${height} overflow-hidden`}
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      {/* Imagen de fondo parallax */}
      <div className="fixed top-[-10vh] left-0 w-full h-[100vh] z-[-1]">
        <motion.div
          style={{ y }}
          className={`relative w-full h-full ${backgroundDark}`}
        >
          <img
            src={image}
            alt="Background"
            className="object-cover w-full h-full"
            style={{ opacity: backgroundOpacity }}
          />
        </motion.div>
      </div>

      <CustomContainer className="relative">
        {/* Texto detrás para sombra */}
        {/* <h3
          className={`text-10xl fill-color font-bold absolute -top-2 left-0 z-0 opacity-65`}
        >
          {title}
        </h3> */}

        <MaskText
          text={title}
          margin="0%"
          duration={0.5}
          startDelay={0.7}
          divClassName={`text-10xl fill-color font-bold !absolute -top-2 left-0 z-0 opacity-65 text-white`}
        />

        {/* Texto principal */}
        {/* <AnimatedTitle text={title} className={overlayTextColor} /> */}
        <MaskText
          text={title}
          margin="0%"
          startDelay={0.7}
          className={`text-10xl font-bold relative z-10 ${overlayTextColor}`}
          divClassName={`text-10xl`}

        />
      </CustomContainer>
    </div>
  );
}

export function AnimatedTitle({ text, className = "" }) {
  const letters = text.split("");

  return (
    <h3 className={`text-10xl font-bold relative z-10 ${className}`}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 1, y: -32, x: -32 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            delay: 0.25, // efecto secuencial letra por letra
            duration: 0.5,
            ease: "easeOut",
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h3>
  );
}
