import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { Title } from "../../components/titleComponents/Title";

// Ejemplo de imágenes para cada propuesta, puedes personalizarlas
const itemImages = [
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80", // Menú Estacional
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // Sostenibilidad
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", // Cocina Identitaria
];

const items = [
  {
    icon: <RestaurantMenuIcon sx={{ fontSize: 40, color: "#1e3334" }} />,
    title: "Menú Estacional",
    subtitle: "Frescura y temporalidad.",
    text: "Platos que evolucionan con las cosechas y celebran la temporada, garantizando sabores auténticos en cada visita.",
  },
  {
    icon: <LocalDiningIcon sx={{ fontSize: 40, color: "#1e3334" }} />,
    title: "Sostenibilidad Integral",
    subtitle: "Responsabilidad & entorno.",
    text: "Reducción de residuos, productos locales y prácticas responsables con el medio ambiente.",
  },
  {
    icon: <LocalDiningIcon sx={{ fontSize: 40, color: "#1e3334" }} />,
    title: "Cocina Identitaria",
    subtitle: "Cultura y modernidad.",
    text: "Recetas salvadoreñas reinterpretadas, fusionando tradición con técnicas modernas.",
  },
];

export default function RestaurantValueProposition() {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
      sx={{
        maxWidth: 1250,
        mx: "auto",
        my: 10,
        px: { xs: 0, md: 1 },
        background: "transparent",
        borderRadius: 0,
      }}
    >
      <Title
        as="h3"
        large
        className="mb-12 mt-8 md:mt-0"
        style={{ color: "#161616", letterSpacing: 2 }}
      >
        Propuesta Gastronómica
      </Title>
      <Stack
        direction={{ xs: "column", md: "row", width: "100%" }}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        {items.map((item, i) => (
          <Box
            key={i}
            component={motion.div}
            // whileHover={{ y: -6, scale: 1.025 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            sx={{
              width: { xs: "100%", md: 370 },
              maxWidth: 400,
              // background: "#ede7df",
              // borderRadius: "1.2rem",
              overflow: "hidden",
              boxShadow: "0 2px 20px #0001",
              mx: "auto",
              mb: { xs: 4, md: 0 },
              display: "flex",
              flexDirection: "column",
              minHeight: 470,
            }}
          >
            {/* Imagen superior */}
            <Box
              component="img"
              src={itemImages[i]}
              alt={item.title}
              sx={{
                width: "100%",
                height: 390,
                objectFit: "cover",
                display: "block",
                // borderRadius: "1.2rem 1.2rem 0 0",
              }}
            />
            {/* Contenido */}
            <Box
              sx={{
                px: 3,
                py: 3,
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 1,
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 600,
                    fontSize: 14,
                    color: "#b48e51",
                  }}
                >
                  {item.subtitle}
                </Typography>
              </Box>

              <Title
                as="h3"
                className="mb-12 mt-8 md:mt-0"
                style={{ color: "#161616", letterSpacing: 2 }}
              >
                {item.title}
              </Title>
              <Typography
                sx={{
                  color: "#2c2c2c",
                  fontSize: 15.5,
                  fontWeight: 400,
                  lineHeight: 1.5,
                  flex: 1,
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
