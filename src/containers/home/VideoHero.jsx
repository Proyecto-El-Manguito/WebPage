import React from "react";
import propTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import VideoComponent from "../../components/genericComponents/VideoComponent";
import { CustomContainer } from "../../components/titleComponents/CustomContainer";

export default function VideoHero({ video }) {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "calc(auto + 100px)",
        height: "105vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src="https://i.imgur.com/m9XneZP.jpeg"
        alt="Background"
        className="object-cover w-full h-full brightness-70"
      />
      {/* <VideoComponent video={video} zIndex={0} overlayOpacity={0.2} /> */}

      {/* 🌫️ Capa de degradado (de abajo hacia arriba) */}
      {/* <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50%", // ajusta el alto del degradado
          background: "linear-gradient(to top, #275448, transparent)",
          zIndex: 3,
        }}
      /> */}

      {/* 🧩 Contenido sobre todo */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 2,
          color: "#fff",
        }}
      >
        <CustomContainer className="h-[90%] flex justify-start items-end">
          <h1 className="flex flex-col text-left ">
            <span className="text-2xl sm:text-4xl lg:text-5xl font-thin leading-tight">
              ¡Bienvenido a
            </span>
            <span className="font-mona text-4xl sm:text-5xl lg:text-6xl font-title font-medium leading-none">
              El Manguito!
            </span>
          </h1>
        </CustomContainer>
      </Box>
    </Box>
  );
}

VideoHero.propTypes = {
  video: propTypes.string.isRequired,
};
