import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function RestaurantFutureMessage() {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.25 }}
      sx={{
        textAlign: "center",
        maxWidth: 820,
        mx: "auto",
        mt: 10,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
        Este restaurante aún no existe.
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "1.25rem", mb: 5 }}
      >
        Pero estamos construyendo el camino hacia un proyecto ejemplar.
        <br />
        Pronto, este espacio será testigo de nuevas historias, sabores y
        encuentros que marcarán el futuro de nuestra cooperativa.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="outlined"
        color="inherit"
        size="large"
        sx={{
          borderRadius: "2rem",
          px: 5,
          fontWeight: 700,
          fontSize: "1.1rem",
          background: "rgba(255,255,255,0.04)",
          "&:hover": {
            background: "rgba(255,255,255,0.13)",
          },
        }}
      >
        Volver al inicio
      </Button>
    </Box>
  );
}
