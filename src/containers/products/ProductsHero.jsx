import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { SectionIntro } from "../../components/titleComponents/SectionIntro";

const PROJECT_IMAGE =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80";

export default function ProductsHero() {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 56 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      sx={{
        color: "white",
        position: "relative",
      }}
    >
      <SectionIntro title="Productos de Nuestra Tierra" id="restaurant" />

      <Typography
        component={motion.h2}
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.45 }}
        variant="h5"
        sx={{
          fontWeight: 400,
          mb: 13,
        }}
      >
        Cada cosecha representa el trabajo cooperativo y el compromiso con la
        sostenibilidad. Conozca nuestra oferta agropecuaria, artesanal y local.
      </Typography>

      {/* GRID DE IMÁGENES */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr",
          },
          gap: {
            xs: 4,
            md: 8,
          },
          my: 4,
        }}
      >
        <Box
          component={motion.img}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          src={PROJECT_IMAGE}
          alt="Futuro restaurante"
          sx={{
            width: "100%",
            justifySelf: "center",
          }}
        />
      </Box>
    </Box>
  );
}
