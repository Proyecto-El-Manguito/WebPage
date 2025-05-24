import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import StyledButton from "../../components/genericComponents/StyledButton";

export default function ContactAndProducts() {
  return (
    <Stack
      sx={{
        position: "relative",
        paddingY: 8,
        height: "calc(auto + 100px)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "third.main",
          zIndex: 1,
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          zIndex: 2,
        }}
      ></Container>
    </Stack>
  );
}
