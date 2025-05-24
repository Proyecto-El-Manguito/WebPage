const themeColor = "dark";

function useThemeHook() {
  const theme = {
    // breakpoints: {
    //   values: {
    //     xs: 0,
    //     sm: 600,
    //     md: 900,
    //     lg: 1200,
    //     xl: 1600,
    //   },
    // },
    palette: {
      mode: "light", //Change to themeColor to apply toogle themes
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
      fontFamily: ["Work Sans"],
    },
  };

  return theme;
}

export { useThemeHook };
