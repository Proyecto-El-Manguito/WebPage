import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const themeColor = "dark";

function useThemeHook() {
  let theme = createTheme({
    palette: {
      mode: "light",
      ...(themeColor === "light"
        ? {}
        : {
            primary: {
              main: "#a7d5a2",
              lighten: "#c4e1b2",
              darken: "#7a9b6a",
            },
            secondary: {
              main: "#97c1e5",
            },
            third: {
              main: "#275448",
              darken: "#17312a",
              lighten: "#4a7b5c",
              transparent: "#27544880",
              neon: "#275448",
            },
            white: {
              main: "#ffffff",
              darken: "#e4e4e4",
            },
            background: {
              grey: "#D9D9D9",
              black: "#060604",
              light: "#efcb69",
            },
            error: {
              main: "#ff0000",
            },
            black: {
              main: "#060604",
              transparent: "#06060480",
            },
            text: {
              main: "#212121",
            },
          }),
    },
    typography: {
      fontFamily: ["Work Sans", "Arial", "sans-serif"].join(","),
      // Define los tamaños base para cada variante
      h1: {
        fontSize: "3rem", // se ajustará con responsiveFontSizes
      },
      h2: {
        fontSize: "2.5rem",
      },
      h3: {
        fontSize: "2rem",
      },
      body1: {
        fontSize: "1rem",
      },
      body2: {
        fontSize: "0.875rem",
      },
    },
  });

  // Aplica tamaños de fuente responsivos automáticamente
  theme = responsiveFontSizes(theme);

  return theme;
}

export { useThemeHook };
