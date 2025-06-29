import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import PlaceIcon from "@mui/icons-material/Place";
import { CustomContainer } from "../../components/titleComponents/CustomContainer";
import MaskText from "../../components/genericComponents/MaskText";

export default function RestaurantLocation() {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      sx={{
        my: 8,
      }}
    >
      <Paper
        elevation={0}
        sx={{ pt: 6, borderRadius: 5, background: "#f5f7fbcc" }}
      >
        <CustomContainer>
          <Box>
            <PlaceIcon sx={{ color: "#1e3334", fontSize: 45, mr: 1 }} />

            <MaskText
              text="Ubicación Estratégica"
              margin="0%"
              duration={0.1}
              className={`text-6xl leading-[normal] font-bold relative text-black`}
            />
          </Box>

          <Typography variant="body1" sx={{ color: "#454d4f", mb: 2, mt: 2 }}>
            El restaurante estará ubicado en el corazón de nuestra comunidad,
            cercano a rutas principales, áreas turísticas y a los espacios de
            producción agrícola, facilitando acceso tanto a visitantes como a
            proveedores locales.
          </Typography>
        </CustomContainer>

        <Box
          component="iframe"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-89.2344,13.6812,-89.1944,13.7012&layer=mapnik"
          title="Ubicación del restaurante"
          sx={{
            width: "100%",
            height: { xs: 240, md: 500 },
            borderRadius: 3,
            border: 0,
            mt: 2,
          }}
          loading="lazy"
        />
      </Paper>
    </Box>
  );
}
