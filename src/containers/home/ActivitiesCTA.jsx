import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Box, Stack, Typography } from "@mui/material";
import VideoComponent from "../../components/genericComponents/VideoComponent";
import TypingText from "../../components/genericComponents/TypingText";
import SliderInfiniteX from "../../components/homeComponents/SliderInfiniteX";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

export default function ActivitiesCTA({ video, imgArray }) {
  const [images, setImages] = useState(imgArray);

  // Rota imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prev) => {
        const rotated = [...prev.slice(1), prev[0]];
        return rotated;
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Clip-path dinámico basado en el scroll
  const clipPath = useTransform(progress, (p) => {
    const inset = 20 - 20 * p; // de 50% a 0%
    const insetSmall = 15 - 15 * p; // de 15% a 0%
    const radiusLarge = 100;
    const radius = radiusLarge - (radiusLarge - 0) * p;

    return `inset(${insetSmall}% ${inset}% ${insetSmall}% ${inset}% round ${radius}px)`;
  });

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "calc(auto + 100px)",
        height: "calc(100vh + 100px)",
        bgcolor: "#fff",
      }}
      ref={containerRef}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          clipPath: clipPath,
          WebkitClipPath: clipPath,
          overflow: "hidden",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        {/* contenido (video, imagen, etc.) */}

        {/* Sección de video */}
        <VideoComponent video={images[0]?.video} parallax={true} />
        {/* Sección de transparencia que une las secciones */}
        {/* <Box
        width={"100%"}
        height="100px"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
          background: "linear-gradient(to Bottom, #275448, transparent)",
        }}
      /> */}
        {/* Sección de fondo */}
        <Stack
          position="absolute"
          spacing={2}
          py={4}
          sx={{
            width: "100%",
            maxWidth: "1200px",
            height: "100%",
            overflow: "hidden",
            zIndex: 3,
          }}
        >
          {/* Sección de informacion */}
          <Stack
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {/* Sección de texto */}
              <Box
                sx={{
                  width: "48%",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  p: 2,
                  ml: "1%",
                  borderRadius: 2,
                }}
              >
                <Box>
                  <Typography
                    variant="body1"
                    color="white.main"
                    sx={{
                      backgroundColor: "#ffffff66",
                      textAlign: "left",
                      borderRadius: "50px",
                      padding: "8px 16px",
                      width: "fit-content",
                      mb: 1,
                    }}
                  >
                    Conoce nuestras actividades
                  </Typography>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={images[0]?.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Typography
                        variant="h4"
                        color="white.main"
                        fontWeight="bold"
                      >
                        {images[0]?.title}
                      </Typography>
                    </motion.div>
                  </AnimatePresence>
                  <TypingText
                    variant="h6"
                    color="white.darken"
                    text={images[0]?.subtitle}
                    speed={40}
                  />
                </Box>
              </Box>
            </Box>
          </Stack>
        </Stack>
        {/* Sección de imagenes */}
        <SliderInfiniteX images={images} />
      </motion.div>
    </Box>
  );
}

ActivitiesCTA.propTypes = {
  video: PropTypes.string.isRequired,
  img: PropTypes.array.isRequired,
};
