import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Title } from "../../components/titleComponents/Title";

// Imágenes inspiradas en galerías profesionales (puedes cambiarlas por las tuyas)
const images = [
  {
    url: "https://i.pinimg.com/736x/b1/f9/09/b1f9093eddb6e476fa42ead39ed84e93.jpg",
    caption: "Ambiente sofisticado",
  },
  {
    url: "https://i.imgur.com/ElC4qlU.jpeg",
    caption: "Platillo increibles",
  },
  {
    url: "https://i.imgur.com/00C8Vfp_d.jpeg?maxwidth=520&shape=thumb&fidelity=high",
    caption: "Ingredientes frescos",
  },
  {
    url: "https://i.imgur.com/Ukh3q9Qg.jpg",
    caption: "Experiencia gourmet",
  },
];

export default function RestaurantGallery() {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.25 }}
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        my: 12,
        px: 2,
      }}
    >
      <Title
        as="h3"
        large
        className="mb-12 mt-8 md:mt-0"
        style={{ color: "#161616", letterSpacing: 2 }}
      >
        Inspiración y Experiencia
      </Title>

      <Grid
        container
        spacing={4}
        sx={{
          alignItems: "stretch",
          justifyContent: "space-evenly",
        }}
      >
        {images.map((img, i) => (
          <Grid
            item
            key={i}
            xs={12}
            sm={6}
            md={6}
            sx={{
              width: "100%",
              // flex: i % 2 === 0 ? 1 : 2,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                flex: 1,
                borderRadius: "2.2rem",
                overflow: "hidden",
                position: "relative",
                height: { xs: 220, sm: 320, md: i % 3 === 0 ? 420 : 320 },
                boxShadow:
                  "0 8px 32px 0 rgba(31, 38, 135, 0.08), 0 1.5px 6px #0001",
                transition: "box-shadow 0.4s cubic-bezier(.4,2,.6,1)",
                ":hover": {
                  boxShadow:
                    "0 12px 48px 0 rgba(31, 38, 135, 0.18), 0 2px 8px #0002",
                },
                display: "flex",
                alignItems: "flex-end",
                background: "#111",
              }}
              component={motion.div}
              whileHover={{ scale: 1.035 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <Box
                component="img"
                src={img.url}
                alt={img.caption}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s cubic-bezier(.4,2,.6,1)",
                  filter: "brightness(0.93) saturate(1.18)",
                }}
              />
              {/* Overlay + Caption */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  bgcolor:
                    "linear-gradient(180deg, rgba(30,30,32,0) 30%, rgba(10,10,18,0.72) 98%)",
                  color: "#fff",
                  p: 3,
                  pt: 7,
                  textAlign: "left",
                  zIndex: 2,
                  fontSize: { xs: 18, md: 20 },
                  fontWeight: 600,
                  letterSpacing: 1.2,
                  textShadow: "0 2px 16px #000a",
                }}
              >
                {img.caption}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
