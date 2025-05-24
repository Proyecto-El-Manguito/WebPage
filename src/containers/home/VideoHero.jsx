import React from "react";
import propTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import VideoComponent from "../../components/genericComponents/VideoComponent";

export default function VideoHero({ video }) {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "calc(auto + 100px)",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <VideoComponent video={video} zIndex={0} />

      {/* 🌫️ Capa de degradado (de abajo hacia arriba) */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50%", // ajusta el alto del degradado
          background: "linear-gradient(to top, #275448, transparent)",
          zIndex: 1,
        }}
      />

      {/* 🧩 Contenido sobre todo */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textShadow: "0 0 10px #000",
        }}
      >
        <Typography variant="h2">¡Bienvenido al Manguito!</Typography>
      </Box>
    </Box>
  );
}

VideoHero.propTypes = {
  video: propTypes.string.isRequired,
};
