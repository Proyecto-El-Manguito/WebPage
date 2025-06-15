import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Typography, useTheme } from "@mui/material";
import { Title } from "../../components/titleComponents/Title";
import { CustomContainer } from "../../components/titleComponents/CustomContainer";

const fade = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const theme = useTheme();

  return (
    <section className="bg-white text-black w-full overflow-hidden">
      {/* Texto central */}
      <motion.div
        ref={ref}
        variants={fade}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="px-6 py-20 "
      >
        <CustomContainer>
          <Title
            as="h3"
            large
            className="mb-4 mt-8 md:mt-0 "
            style={{ color: theme.palette.third.main }}
          >
            Nuestro Territorio Productivo
          </Title>
          <Title small as="h3" className="mb-4 mt-8 md:mt-0 font-light">
            La tierra es nuestra herencia y nuestro medio de vida. En estas
            parcelas, asociadas a la Cooperativa El Manguito R.L., sembramos
            esperanza con cada ciclo agrícola. Esta imagen retrata una zona de
            siembra reciente, donde comienzan a brotar cultivos esenciales como
            el maíz o el frijol, pilares de la alimentación salvadoreña.
          </Title>
        </CustomContainer>
      </motion.div>

      {/* Imagen superior */}
      {/* <div className="w-full h-[60vh] overflow-hidden">
        <img
          src="https://i.imgur.com/9HAjD7F.jpeg"
          alt="Visión"
          className="w-full h-full object-cover"
        />
      </div> */}
    </section>
  );
}
