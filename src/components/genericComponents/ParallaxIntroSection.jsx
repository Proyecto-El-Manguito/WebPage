import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { CustomContainer } from "../../components/titleComponents/CustomContainer";

export function ParallaxIntroSection({
  image,
  children,
  parallaxEffect = true,
  backgroundOpacity = 0.65,
  height = "h-[80vh]",
  overlayTextColor = "text-white",
  backgroundDark = "bg-black",
}) {
  const containerRef = useRef(null);

  // Scroll y Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Solo se aplica el parallax si está activo
  const y = useTransform(
    scrollYProgress,
    [0, 1],
     parallaxEffect ? ["-5vh", "5vh"] : ["0vh", "0vh"]
  );

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center min-h-[400px] ${height} overflow-hidden`}
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      {/* Imagen de fondo parallax */}
      <div className="fixed top-[10vh] left-0 w-full h-[120vh] z-[-1] pointer-events-none">
        <motion.div
          style={{ y }}
          className={`relative w-full h-full ${backgroundDark}`}
        >
          <img
            src={image}
            alt="Background"
            className="object-cover w-full h-full"
            style={{ opacity: backgroundOpacity }}
            draggable={false}
          />
        </motion.div>
      </div>

      <CustomContainer className="relative">
        <div className={`relative z-10 ${overlayTextColor}`}>
          {children}
        </div>
      </CustomContainer>
    </div>
  );
}
