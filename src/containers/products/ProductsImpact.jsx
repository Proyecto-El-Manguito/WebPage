import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import GroupsIcon from "@mui/icons-material/Groups";
import PaidIcon from "@mui/icons-material/Paid";

const IMPACTS = [
  {
    icon: <GroupsIcon sx={{ fontSize: 50, color: "#3d604c" }} />,
    title: "Desarrollo Comunitario",
    desc: "Generamos empleo y fortalecemos la economía de la región.",
    color: "#c0e2d0",
  },
  {
    icon: <PaidIcon sx={{ fontSize: 50, color: "#b48e51" }} />,
    title: "Sostenibilidad Ambiental",
    desc: "Promovemos el uso racional de recursos y la conservación del entorno.",
    color: "#f8e9d2",
  },
  {
    icon: <PaidIcon sx={{ fontSize: 50, color: "#d86c3a" }} />,
    title: "Valor Justo",
    desc: "Ofrecemos precios competitivos que benefician tanto al productor como al consumidor.",
    color: "#fde9e0",
  },
];

export default function ProductsImpact() {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      sx={{
        // maxWidth: 1250,
        // mx: "auto",
        my: 12,
        px: { xs: 1, md: 2 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "#181e1b",
          fontWeight: 900,
          textAlign: "center",
          mb: 8,
          letterSpacing: 1.2,
          fontSize: { xs: 32, md: 48 },
        }}
      >
        Impacto Local
      </Typography>
      <Grid
        container
        spacing={{ xs: 4, md: 7 }}
        justifyContent="center"
        alignItems="stretch"
      >
        {IMPACTS.map((impact, i) => (
          <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: "flex" }}>
            <Box
              component={motion.div}
              whileHover={{
                // scale: 1.035,
                boxShadow:
                  "0 16px 48px 0 rgba(31,38,135,0.07), 0 1.5px 8px #b1d7bb21",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                p: { xs: 3, md: 4 },
                borderRadius: "2rem",
                background: "#fcfcfa",
                minHeight: 260,
                position: "relative",
                overflow: "visible",
                boxShadow: "0 4px 28px 0 rgba(62,81,80,0.05)",
                border: "1.5px solid #edeae4",
                transition: "border 0.25s",
              }}
            >
              {/* Línea de acento a la izquierda */}
              <Box
                sx={{
                  position: "absolute",
                  left: -14,
                  top: 38,
                  width: 5,
                  height: 54,
                  background: impact.color,
                  borderRadius: "8px",
                  display: { xs: "none", md: "block" },
                }}
              />
              {/* Icono con círculo de fondo */}
              <Box
                sx={{
                  background: impact.color,
                  borderRadius: "50%",
                  width: 68,
                  height: 68,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2.5,
                  boxShadow: "0 2px 10px #b1d7bb15",
                }}
              >
                {impact.icon}
              </Box>
              <Typography
                variant="h5"
                sx={{
                  color: "#181e1b",
                  fontWeight: 800,
                  mb: 1,
                  fontSize: 23,
                  letterSpacing: 0.5,
                  mt: 1,
                }}
              >
                {impact.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#595c4a",
                  opacity: 0.89,
                  fontSize: 17,
                  fontWeight: 400,
                  mb: 1,
                  mt: 0.5,
                }}
              >
                {impact.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
