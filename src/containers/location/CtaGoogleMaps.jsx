import React, { useRef } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import { Title } from "../../components/titleComponents/Title";
import MaskText from "../../components/genericComponents/MaskText";

export function CtaGoogleMaps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <Stack
      ref={ref}
      component="section"
      spacing={2}
      alignItems="center"
      justifyContent="center"
      py={6}
      px={2}
      sx={{
        position: "relative",
        textAlign: "center",
        borderRadius: 4,
        overflow: "hidden",
        minHeight: "600px",
        height: "80vh",
        m: 2,
      }}
    >
      {/* Contenedor de imagen + overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      >
        {/* <motion.img
          src="https://i.imgur.com/MgFcWPM.jpeg"
          alt="Cooperativa El Manguito"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.6 }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "16px",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        /> */}
        <img
          src="https://i.imgur.com/MgFcWPM.jpeg"
          alt="Cooperativa El Manguito"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "16px",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: "absolute",
            backgroundColor: "#000",
            width: "100%",
            height: "100%",
            borderRadius: "16px",
          }}
        />
      </Box>

      {/* Contenido (zIndex por delante) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ zIndex: 2, textAlign: "center" }}
      >
        {/* <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
          ¿Ya sabes cómo llegar?
        </Typography> */}
        <MaskText
          text="¿Ya sabes cómo llegar?"
           margin="0%"
          duration={0.3}
          className={`text-8xl leading-[normal] font-bold relative text-white`}
        />

        <Typography variant="body1" color="white" sx={{ mb: 2, mt: 2 }}>
          Te invitamos a visitar nuestra cooperativa. Haz clic para abrir la
          ruta en Google Maps.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          startIcon={<LocationPinIcon />}
          size="large"
          href="https://www.google.com/maps/place/Cooperativa+El+Manguito/@13.95366,-89.3569,17z"
          target="_blank"
          sx={{
            borderRadius: "30px",
            textTransform: "none",
            px: 4,
            py: 1.5,
            fontWeight: "bold",
          }}
        >
          Ver en Google Maps
        </Button>
      </motion.div>
    </Stack>
  );
}
