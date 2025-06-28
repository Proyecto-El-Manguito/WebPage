import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "linear-gradient(135deg, #1e3334 40%, #415150 100%)",
        color: "#fff",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Typography
        component={motion.h1}
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        variant="h1"
        sx={{
          fontSize: { xs: "7rem", md: "11rem" },
          fontWeight: "bold",
          lineHeight: 1,
          letterSpacing: "-0.05em",
          mb: 2,
          textShadow: "0 6px 32px #2226",
        }}
      >
        404
      </Typography>
      <Typography
        component={motion.h2}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        variant="h4"
        sx={{
          fontWeight: "medium",
          mb: 2,
          color: "#fafafa",
        }}
      >
        Página no encontrada
      </Typography>
      <Typography
        component={motion.p}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        variant="body1"
        sx={{
          mb: 4,
          maxWidth: "400px",
          mx: "auto",
          color: "#dadada",
        }}
      >
        La página que busca no existe o fue movida. Por favor, regrese al inicio o explore otras secciones del sitio.
      </Typography>
      <Button
        component={Link}
        to="/"
        size="large"
        variant="contained"
        color="primary"
        sx={{
          px: 5,
          fontWeight: 700,
          borderRadius: "1.5rem",
          textTransform: "none",
          fontSize: "1.1rem",
          boxShadow: "0 2px 12px #2223",
        }}
      >
        Volver al inicio
      </Button>
    </Box>
  );
}
