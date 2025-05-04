import { Box, Container } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <Container>
      <h1>Como usar colores</h1>
      <Box
        bgcolor="primary.main"
        sx={{
          width: "100px",
          height: "100px",
        }}
      />
      <Box
        bgcolor="secondary.main"
        sx={{
          width: "100px",
          height: "100px",
        }}
      />
      <Box
        bgcolor="third.main"
        sx={{
          width: "100px",
          height: "100px",
        }}
      />
      <Box
        bgcolor="background.black"
        sx={{
          width: "100px",
          height: "100px",
        }}
      />
      <Box
        bgcolor="background.light"
        sx={{
          width: "100px",
          height: "100px",
        }}
      />
    </Container>
  );
}
