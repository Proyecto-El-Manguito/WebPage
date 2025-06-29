import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import { motion } from "framer-motion";
import GrassIcon from "@mui/icons-material/Grass";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StorefrontIcon from "@mui/icons-material/Storefront";

const STEPS = [
  {
    icon: <GrassIcon sx={{ fontSize: 40, color: "#1e3334" }} />,
    title: "Preparación y Siembra",
    desc: "Seleccionamos semillas de calidad y preparamos la tierra con prácticas sustentables.",
  },
  {
    icon: <AgricultureIcon sx={{ fontSize: 40, color: "#1e3334" }} />,
    title: "Cuidado y Cosecha",
    desc: "Monitoreamos el crecimiento y cosechamos en el punto óptimo para garantizar frescura.",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 40, color: "#1e3334" }} />,
    title: "Distribución Responsable",
    desc: "Transportamos el producto a puntos de venta locales y aliados estratégicos.",
  },
  {
    icon: <StorefrontIcon sx={{ fontSize: 40, color: "#1e3334" }} />,
    title: "Comercialización",
    desc: "Ofrecemos nuestros productos en mercados, ferias y a través de socios comerciales.",
  },
];

export default function ProductsStory() {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      sx={{
        maxWidth: 1000,
        mx: "auto",
        my: 10,
        px: 2,
        py: 6,
        background: "#f6faf7",
        borderRadius: 5,
        boxShadow: "0 2px 12px #1e33340a",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "#1e3334", fontWeight: 700, mb: 3, textAlign: "center" }}
      >
        Nuestra Cadena Productiva
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={3} divider={<Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" } }} />}>
        {STEPS.map((step, idx) => (
          <Box key={idx} sx={{ textAlign: "center", px: 2 }}>
            {step.icon}
            <Typography variant="h6" sx={{ mt: 1.5, color: "#415150", fontWeight: 700 }}>
              {step.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#4a5a5a", mt: 0.5 }}>
              {step.desc}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
