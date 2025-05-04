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
            },
            secondary: {
              main: "#97c1e5",
            },
            third: {
              main: "#275448",
            },
            white: {
              main: "#ffffff",
            },
            background: {
              black: "#060604",
              light: "#efcb69",
            },

            error: {
              main: "#ff0000",
            },
            black: {
              main: "#060604",
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
