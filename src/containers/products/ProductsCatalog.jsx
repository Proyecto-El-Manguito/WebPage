import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Chip,
  Stack,
  Avatar,
  useMediaQuery,
} from "@mui/material";

const PRODUCTS = [
  {
    name: "Yuca fresca",
    description: "Cosechada en su punto óptimo, lista para consumo directo o procesamiento.",
    image: "https://i.imgur.com/XRtxZ9Tg.jpg",
    tag: "Raíz",
  },
  {
    name: "Vino artesanal",
    description: "Vino de uvas seleccionadas, añejado en barricas, aroma y sabor inconfundible.",
    image: "https://i.imgur.com/qztY2Ol.jpeg",
    tag: "Bebida",
  },
  {
    name: "Limones orgánicos",
    description: "Limones frescos, cosechados sin pesticidas, ideales para bebidas y cocina.",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=700&q=80",
    tag: "Fruta",
  },
  {
    name: "Miel artesanal",
    description: "Miel pura recolectada de colmenas locales, sin aditivos.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80",
    tag: "Procesado",
  },
  {
    name: "Café de altura",
    description: "Café tostado artesanalmente, sabor intenso y fragancia única.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=700&q=80",
    tag: "Especialidad",
  },
];

export default function SplitProductShowcase() {
  const [selected, setSelected] = useState(0);
  const isMobile = useMediaQuery("(max-width:900px)");
  const product = PRODUCTS[selected];

  return (
    <Box
      sx={{
        width: "100%",
        pb: { xs: 2, md: 0 },
        minHeight: "100dvh",
        pt:{ xs: 12, md: 20 },  
        mt: 10,
      }}
    >
      <Grid
        container
        spacing={0}
        sx={{
          borderRadius: { xs: 0, md: "1.6rem" },
          overflow: "hidden",
          boxShadow: { xs: "none", md: "0 2px 36px #1212141A" },
          maxWidth: 1280,
          mx: "auto",
          minHeight: { xs: "auto", md: 620 },
        }}
      >
        {/* Imagen principal */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            flex: 1,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // height: { xs: 260, sm: 320, md: "100%" },
            minHeight: { xs: 220, md: "100%" },
            // height: "100%",
            bgcolor: "#191919",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: `url(${product.image}) center center/cover no-repeat`,
              filter: "brightness(0.36) blur(2.2px)",
              zIndex: 1,
              transition: "background 0.5s",
            }}
          />
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              position: "relative",
              maxWidth: { xs: 240, sm: 260, md: 340, lg: 420 },
              width: { xs: "70%", md: "85%" },
              height: "auto",
              zIndex: 2,
              objectFit: "contain",
              filter: "drop-shadow(0 8px 36px #1117)",
              borderRadius: "1.3rem",
              background: "#fff",
              p: 1.2,
              boxSizing: "border-box",
              transition: "all 0.35s cubic-bezier(.4,2,.6,1)",
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              bottom: 22,
              left: 28,
              color: "#faf9f6",
              fontSize: { xs: 17, md: 22 },
              fontWeight: 700,
              letterSpacing: 1.4,
              zIndex: 3,
              opacity: 0.92,
              textShadow: "0 2px 10px #000d",
              display: { xs: "none", md: "block" },
            }}
          >
            {product.name}
          </Typography>
        </Grid>

        {/* Columna derecha */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            flex: { xs: "auto", md: 1 },
            bgcolor: "#faf9f6",
            px: { xs: 2.2, sm: 3, md: 6, lg: 8 },
            py: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            minHeight: { xs: 200, md: "100%" },
          }}
        >
          <Chip
            label={product.tag}
            sx={{
              background: "#e6f4e6",
              color: "#40684a",
              mb: 1.5,
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 1.1,
              px: 2,
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              fontSize: { xs: 25, sm: 31, md: 44 },
              color: "#232323",
              mb: 1.2,
              letterSpacing: 1.2,
              lineHeight: 1.08,
              textAlign: { xs: "center", md: "left" },
              textShadow: "0 2px 10px #eee2",
            }}
          >
            {product.name}
          </Typography>
          <Typography
            sx={{
              color: "#7e7567",
              fontSize: { xs: 15, sm: 17, md: 20 },
              fontWeight: 500,
              mb: 2.2,
              maxWidth: 440,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {product.description}
          </Typography>

          {/* Selector de productos */}
          <Stack
            direction={isMobile ? "row" : "column"}
            spacing={2}
            sx={{
              mt: isMobile ? 1.2 : "auto",
              alignItems: isMobile ? "center" : "flex-start",
              width: "100%",
              overflowX: isMobile ? "auto" : "visible",
              py: 1,
              px: 0,
              scrollbarWidth: "none", // Firefox
              "&::-webkit-scrollbar": { display: "none" }, // Chrome/Safari
            }}
          >
            {PRODUCTS.map((item, idx) => (
              <Box
                key={item.name}
                onClick={() => setSelected(idx)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  opacity: idx === selected ? 1 : 0.5,
                  borderLeft: {
                    md: idx === selected ? "4px solid #40684a" : "4px solid transparent",
                  },
                  borderBottom: {
                    xs: idx === selected ? "3px solid #40684a" : "3px solid transparent",
                  },
                  borderRadius: isMobile ? "2.2rem" : "0.7rem",
                  bgcolor: idx === selected ? "#e6f4e6" : "transparent",
                  boxShadow: idx === selected ? "0 1px 8px #e6f4e660" : "none",
                  transition: "all 0.17s cubic-bezier(.4,2,.6,1)",
                  px: 1.3,
                  py: 0.7,
                  mb: { md: 0.7, xs: 0 },
                  mx: { xs: 0.3, md: 0 },
                  minWidth: isMobile ? 140 : "auto",
                }}
              >
                <Avatar
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: 38,
                    height: 38,
                    border: idx === selected ? "2.5px solid #40684a" : "2.5px solid #d6d6ce",
                    boxShadow: idx === selected ? "0 1px 5px #b8d7c6a0" : "none",
                    mr: 1.1,
                    transition: "all 0.17s cubic-bezier(.4,2,.6,1)",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#232323",
                    fontSize: 14.5,
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
