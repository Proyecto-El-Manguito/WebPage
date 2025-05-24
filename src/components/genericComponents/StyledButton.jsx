import { Button, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

export default function StyledButton({
  title,
  color = "#fff",
  width,
  onClick,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const originalWidth = width || isMobile ? "100%" : "30vw"; // Default width if not provided
  return (
    <Button
      variant="outlined" // Sin borde visible por defecto
      disableRipple
      sx={{
        position: "relative",
        marginTop: "20px",
        padding: "10px 20px",
        fontSize: "1rem",
        fontWeight: "bold",
        width: originalWidth,
        color: color,
        overflow: "hidden",
        borderRadius: 8,
        border: `2px solid ${color}`,
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
