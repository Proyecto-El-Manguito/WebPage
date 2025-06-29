import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import GroupsIcon from "@mui/icons-material/Groups";
import PaidIcon from "@mui/icons-material/Paid";

const IMPACTS = [
  {
    icon: <GroupsIcon sx={{ fontSize: 44, color: "#415150" }} />,
    title: "Desarrollo Comunitario",
    desc: "Generamos empleo y fortalecemos la economía de la región.",
  },
  {
    icon: <PaidIcon sx={{ fontSize: 44, color: "#415150" }} />,
    title: "Sostenibilidad Ambiental",
    desc: "Promovemos el uso racional de recursos y la conservación del entorno.",
  },
  {
    icon: <PaidIcon sx={{ fontSize: 44, color: "#415150" }} />,
    title: "Valor Justo",
    desc: "Ofrecemos precios competitivos que benefician tanto al productor como al consumidor.",
  },
];

export default function ProductsImpact() {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      sx={{ maxWidth: 950, mx: "auto", my: 10, px: 2 }}
    >
      <Typography variant="h4" sx={{ color: "#1e3334", fontWeight: 700, mb: 3, textAlign: "center" }}>
        Impacto Local
      </Typography>
      <Grid container spacing={4}>
        {IMPACTS.map((impact, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 5,
                textAlign: "center",
                background: "#f7faf6",
                height: 230,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {impact.icon}
              <Typography variant="h6" sx={{ color: "#415150", fontWeight: 700, mt: 2 }}>
                {impact.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#474747", mt: 1 }}>
                {impact.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
