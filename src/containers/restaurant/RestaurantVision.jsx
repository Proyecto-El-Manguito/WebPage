import React from "react";
import { Box, Typography, Paper, Divider, Stack } from "@mui/material";
import { motion } from "framer-motion";
import MaskText from "../../components/genericComponents/MaskText";

export default function RestaurantVision() {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      sx={{ width: "100%", mx: "auto", my: 8 }}
    >
      <Paper
        elevation={2}
        sx={{
          p: { xs: 4, md: 6 },
          borderRadius: 5,
          background: "#f5f5f8cc",
          position: "relative",
          overflow: "hidden",
          zIndex: 2,
        }}
      >
        <div className="z-[-90] opacity-65">
          <div className="absolute top-[0%] right-[-20%] w-[50vw] h-[50vw] rounded-full bg-[#40587a30] flex items-center justify-center">
            <div className="w-[40vw] h-[40vw] rounded-full bg-[#2d3e5650]"></div>
          </div>
        </div>

        <div className="z-[2]">
          <MaskText
            text="Visión del Restaurante"
            margin="0%"
            duration={0.3}
            className={`text-6xl leading-[normal] font-bold relative text-black`}
          />
          <Typography variant="body1" sx={{ color: "#3a4545", mb: 6, mt: 2 }}>
            Nuestro restaurante será el punto de encuentro entre la tradición y
            la innovación culinaria. Buscamos ofrecer productos frescos, locales
            y recetas auténticas en un ambiente sostenible y acogedor, diseñado
            para fortalecer la economía local y crear experiencias memorables
            para nuestra comunidad y visitantes.
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            justifyContent="space-between"
          >
            <Box>
              <Typography
                variant="h3"
                className={`!text-4xl `}
                sx={{ color: "#415150", fontWeight: 700, mb: 4 }}
              >
                Sostenibilidad
              </Typography>
              <Typography variant="body1">
                Utilizaremos insumos agropecuarios propios y prácticas
                responsables. El respeto por el medio ambiente será prioridad en
                cada proceso.
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h3"
                className={`!text-4xl `}
                sx={{ color: "#415150", fontWeight: 700, mb: 4 }}
              >
                Innovación Local
              </Typography>
              <Typography variant="body1">
                Nuestro menú celebrará ingredientes y preparaciones salvadoreñas
                reinterpretadas con creatividad.
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h3"
                className={`!text-4xl `}
                sx={{ color: "#415150", fontWeight: 700, mb: 4 }}
              >
                Comunidad
              </Typography>
              <Typography variant="body1">
                El restaurante será un espacio abierto para eventos, talleres y
                encuentros que fortalezcan la vida cooperativa.
              </Typography>
            </Box>
          </Stack>
        </div>
      </Paper>
    </Box>
  );
}
