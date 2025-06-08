import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { CustomContainer } from "../../components/titleComponents/CustomContainer";
import { Title } from "../../components/titleComponents/Title";
import { Box } from "@mui/material";
import StyledLink from "../../components/genericComponents/StyledLink";

export default function SectionWithMotion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const images = [
    "https://i.imgur.com/I2m3yBh.jpg",
    "https://i.imgur.com/X6NhvOq.jpg",
  ];

  return (
    <Box
      sx={{
        minHeight: "110vh",
        bgcolor: "white.main",
        color: "black.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        // marginTop: "-30px", 
        position: "relative",
        zIndex: 10,
        boxShadow: "0 -10px 20px rgba(0,0,0,0.1)",
      }}
    >
      <CustomContainer as="section" ref={ref} className="grid !py-16">
        <div className="items-center gap-16 md:grid md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {images.map((src, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: i % 2 === 0 ? -80 : 80,
                }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: i % 2 === 0 ? -80 : 80 }
                }
                transition={{ duration: 0.8, delay: 0.2 * i, ease: "easeOut" }}
                style={{ zIndex: 2 }}
              >
                <img
                  className={
                    i === 0
                      ? "w-full rounded-lg"
                      : "mt-4 w-full rounded-lg lg:mt-10"
                  }
                  src={src}
                  alt={`Imagen ${i + 1}`}
                  width={500}
                  height={500}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            style={{ zIndex: 2 }}
          >
            <Title className="mb-4 mt-8 md:mt-0">Nuestra historia</Title>
            <p className="mb-4">
              ACOAPASER de R. L. es una cooperativa agrícola que desde 1985 ha
              crecido con una administración técnica y estructurada, guiada por
              su consejo, lo que le ha permitido desarrollarse con controles
              organizados en sus actividades agrícolas.
            </p>
            <p className="mb-4">
              Nuestros expertos en viajes optimizan cada instante para que tu
              experiencia sea fluida y enriquecedora de principio a fin.
            </p>
            <StyledLink width="22ch" title={"VER MÁS"} href="/history" />
          </motion.div>
        </div>
      </CustomContainer>
    </Box>
  );
}
