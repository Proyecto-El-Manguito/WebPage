import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function ProductsHero() {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 38 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{
        py: { xs: 7, md: 12 },
        textAlign: "center",
        color: "white",
        background: "linear-gradient(120deg, #415150 0%, #1e3334 100%)",
        borderRadius: 6,
        mb: 8,
        mx: { xs: 0, md: 2 },
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: "-0.03em", mb: 2 }}>
        Productos de Nuestra Tierra
      </Typography>
      <Typography variant="h5" sx={{ color: "#e7fbe7", maxWidth: 600, mx: "auto" }}>
        Cada cosecha representa el trabajo cooperativo y el compromiso con la sostenibilidad. Conozca nuestra oferta agropecuaria, artesanal y local.
      </Typography>
    </Box>
  );
}
