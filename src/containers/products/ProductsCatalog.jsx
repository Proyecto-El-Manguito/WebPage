import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Chip } from "@mui/material";
import { motion } from "framer-motion";

const PRODUCTS = [
  {
    name: "Yuca fresca",
    description: "Cosechada en su punto óptimo, lista para consumo directo o procesamiento.",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    tag: "Raíz",
  },
  {
    name: "Elote tierno",
    description: "Elotes seleccionados, ideales para elote loco, atol o asado.",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
    tag: "Grano",
  },
  {
    name: "Miel artesanal",
    description: "Miel pura recolectada de colmenas locales, sin aditivos.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    tag: "Procesado",
  },
  {
    name: "Frijol rojo",
    description: "Grano limpio, de cosecha propia, rico en nutrientes.",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    tag: "Grano",
  },
  {
    name: "Yuca procesada",
    description: "Lista para cocinar, lavada y envasada, ideal para negocios y familias.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=400&q=80",
    tag: "Procesado",
  },
  {
    name: "Café artesanal",
    description: "Café de altura, tostado en pequeñas partidas, aroma inconfundible.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    tag: "Especialidad",
  },
];

export default function ProductsCatalog() {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      sx={{ maxWidth: 1200, mx: "auto", my: 6, px: 2 }}
    >
      <Grid container spacing={4}>
        {PRODUCTS.map((p, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              component={motion.div}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 24px #2225" }}
              sx={{ borderRadius: 5, overflow: "hidden", minHeight: 410 }}
              elevation={3}
            >
              <CardMedia
                component="img"
                image={p.image}
                alt={p.name}
                sx={{ height: 190, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, color: "#1e3334" }}>
                  {p.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#444", mb: 1 }}>
                  {p.description}
                </Typography>
                <Chip
                  label={p.tag}
                  color="success"
                  size="small"
                  sx={{ mt: 1, fontWeight: 600, background: "#e4f6ec" }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
