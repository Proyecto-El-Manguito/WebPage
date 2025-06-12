import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Typography } from "@mui/material";
import { Title } from "../../components/titleComponents/Title";

const fade = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-white text-black w-full overflow-hidden">
      {/* Imagen superior */}
      <div className="w-full h-[60vh] overflow-hidden">
        <img
          src="https://i.imgur.com/t83cNlL.png"
          alt="Visión"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Texto central */}
      <motion.div
        ref={ref}
        variants={fade}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="px-6 py-20 "
      >
        <Title as="h3" large className="mb-4 mt-8 md:mt-0 text-[#029e7f] ">
          Nuestro compromiso conecta naturaleza, bienestar y diseño consciente.
        </Title>
        <Title as="h3" large className="mb-4 mt-8 md:mt-0 font-light">
          En cada espacio, actividad y experiencia que ofrecemos, buscamos
          equilibrio. Un equilibrio entre el cuerpo y el entorno, entre lo
          moderno y lo natural. Es ahí donde la experiencia se convierte en
          recuerdo, y el recuerdo en identidad.
        </Title>
      </motion.div>
    </section>
  );
}
