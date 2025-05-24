import React, { useRef } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import { AnimatePresence, motion, useInView } from "framer-motion";
import StyledButton from "../../components/genericComponents/StyledButton";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
];

export default function GalleryCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  return (
    <Stack
      ref={ref}
      spacing={2}
      py={12}
      sx={{
        py: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "calc(auto + 100px)",
        bgcolor: "background.grey",
      }}
    >
      <AnimatePresence>
        {/* Titulo de la sección */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" color="third.main" fontWeight={700}>
            Explora nuestra galería
          </Typography>
        </motion.div>
        {/* Subtítulo de la sección */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Typography variant="h6" color="primary.darken" fontWeight={400}>
            Descubre la belleza de nuestro hotel a través de imágenes
            cautivadoras.
          </Typography>
        </motion.div>
        {/* Contener para la galería de imágenes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Container>
            <Box
              sx={{
                position: "relative",
                padding: 2,
                borderRadius: 4,
                background: "linear-gradient(to Bottom, #275448, transparent)",
                width: "100%",
                minHeight: {
                  xs: "800px",
                  sm: "600px",
                  md: "500px",
                  lg: "400px",
                },
                height: "70svh",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, transparent, #D9D9D9)",
                  zIndex: 3,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  borderRadius: 12,
                  color: "#fff",
                  zIndex: 4,
                  width: {
                    xs: "80%",
                    sm: "60%",
                    md: "40%",
                    lg: "30%",
                  },
                  py: 1,
                }}
              >
                <StyledButton
                  title="Ver galería"
                  color="#275448"
                  width={"auto"}
                />
              </Box>
              <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
                {images.map((imgObj, index) => (
                  <motion.div
                    key={imgObj?.id}
                    src={imgObj?.src}
                    alt={`Imagen ${imgObj?.id}`}
                    layout
                    initial={{ opacity: 0, y: 400 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    exit={{ opacity: 0, y: 400 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 25,
                      bounce: 0.2,
                      delay: 0.15 * index,
                    }}
                  >
                    <Box
                      component="img"
                      src={imgObj?.src}
                      alt={imgObj?.alt}
                      sx={{
                        width: "100%",
                        height: imgObj?.height,
                        objectFit: "cover",
                        borderRadius: 2,
                        display: "block",
                      }}
                    />
                  </motion.div>
                ))}
              </Masonry>
            </Box>
          </Container>
        </motion.div>
      </AnimatePresence>
    </Stack>
  );
}
