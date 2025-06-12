import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Typography, Container } from "@mui/material";
import { CustomContainer } from "../../components/titleComponents/CustomContainer";
import { Title } from "../../components/titleComponents/Title";

export default function IntroSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center min-h-[400px] h-[80vh] overflow-hidden"
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      {/* Imagen con efecto parallax */}
      <div className="fixed top-[-10vh] left-0 w-full h-[100vh] z-[-1]">
        <motion.div style={{ y }} className="relative w-full h-full bg-black">
          <img
            src="https://i.imgur.com/WhlSpA3.jpeg"
            alt="Background"
            className="object-cover w-full h-full opacity-65 "
          />
        </motion.div>
      </div>

      {/* Contenido del texto */}
      {/* <CustomContainer>
        <span className="text-10xl fill-color font-extrabold">Historia</span>

        <h3 className="text-10xl text-white font-bold">Historia</h3>
        <span className="text-10xl fill-color font-extrabold">Historia</span>
      </CustomContainer> */}

      <CustomContainer className="relative">
        {/* Texto detrás */}
        <h3 className="text-10xl fill-color font-bold absolute -top-2 left-0 z-0 opacity-65">
          Actividades
        </h3>

        {/* Texto principal */}
        <h3 className="text-10xl text-white shadow font-bold relative z-10">
          Actividades
        </h3>
      </CustomContainer>
    </div>
  );
}
