import { Grid, hexToRgb, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import QrMaps from "../../assets/QrMaps.jpg";
import QrWaze from "../../assets/QrWaze.jpg";

export function GridQR() {
  const theme = useTheme();
  return (
    <Grid container spacing={2} pb={12}>
      <Grid
        size={{ xs: 12, sm: 4 }}
        px={2}
        py={4}
        sx={{
          borderRadius: "16px",
          border: `4px solid ${theme.palette.third.main}`,
          boxShadow: `0 4px 12px rgba(${hexToRgb(
            theme.palette.third.main
          )}, 0.3)`,
          backgroundColor: theme.palette.background.paper,
          transition: "all 0.3s ease-in-out",
          transform: "scale(1)",
          "&:hover": {
            boxShadow: `0 8px 20px rgba(${hexToRgb(
              theme.palette.third.main
            )}, 0.6)`,
            transform: "scale(1.02)",
          },
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div className="z-[-2] opacity-65">
          <div className="absolute bottom-[-40%] left-[-40%] w-[350px] h-[350px] rounded-full bg-[#40587a30] flex items-center justify-center">
            <div className="w-[250px] h-[250px] rounded-full bg-[#2d3e5650]"></div>
          </div>
        </div>
        <img
          src={QrMaps}
          alt="Cooperativa El Manguito"
          style={{ width: "100%", height: "auto", borderRadius: "16px" }}
        />
        <Stack
          spacing={1}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ textAlign: "center", mt: 2, zIndex: 2 }}
        >
          <Typography
            variant="h5"
            component="h2"
            color="third.main"
            sx={{ textAlign: "center", mb: 2, fontWeight: "bold" }}
          >
            Escanea el código QR
          </Typography>

          <Typography
            variant="body1"
            component="h3"
            color="text.secondary"
            sx={{ textAlign: "center", mb: 2, zIndex: 1, }}
          >
            Encuentranos en
          </Typography>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/512px-Google_Maps_Logo_2020.svg.png"
            alt="Google Maps"
            style={{
              width: "100px",
              height: "auto",
              borderRadius: "8px",
              zIndex: 1,
            }}
          />
        </Stack>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 4 }}
        px={2}
        py={4}
        sx={{
          borderRadius: "16px",
          border: `4px solid ${theme.palette.third.main}`,
          boxShadow: `0 4px 12px rgba(${hexToRgb(
            theme.palette.third.main
          )}, 0.3)`,
          backgroundColor: theme.palette.background.paper,
          transition: "all 0.3s ease-in-out",
          transform: "scale(1)",
          "&:hover": {
            boxShadow: `0 8px 20px rgba(${hexToRgb(
              theme.palette.third.main
            )}, 0.6)`,
            transform: "scale(1.02)",
          },
        }}
      >
        <img
          src={QrWaze}
          alt="Cooperativa El Manguito"
          style={{ width: "100%", height: "auto", borderRadius: "16px" }}
        />
        <Stack
          spacing={1}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ textAlign: "center", mt: 2 }}
        >
          <Typography
            variant="h5"
            component="h2"
            color="third.main"
            sx={{ textAlign: "center", mb: 2, fontWeight: "bold" }}
          >
            Escanea el código QR
          </Typography>

          <Typography
            variant="body1"
            component="h3"
            color="text.secondary"
            sx={{ textAlign: "center", mb: 2 }}
          >
            Encuentranos en
          </Typography>
          <img
            src="https://files.brandlogos.net/svg/KWGOdcgoGJ/waze-app-icon-logo-brandlogos.net_izn3bglse.svg"
            alt="Waze"
            style={{ width: "90px", height: "auto", borderRadius: "8px" }}
          />
        </Stack>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 4 }}
        px={2}
        py={4}
        sx={{
          borderRadius: "16px",
          border: `4px solid ${theme.palette.third.main}`,
          boxShadow: `0 4px 12px rgba(${hexToRgb(
            theme.palette.third.main
          )}, 0.3)`,
          backgroundColor: theme.palette.background.paper,
          transition: "all 0.3s ease-in-out",
          transform: "scale(1)",
          "&:hover": {
            boxShadow: `0 8px 20px rgba(${hexToRgb(
              theme.palette.third.main
            )}, 0.6)`,
            transform: "scale(1.02)",
          },
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div className="z-[-2] opacity-65">
          <div className="absolute bottom-[-40%] right-[-40%] w-[350px] h-[350px] rounded-full bg-[#40587a30] flex items-center justify-center">
            <div className="w-[250px] h-[250px] rounded-full bg-[#2d3e5650]"></div>
          </div>
        </div>

        <img
          // TODO : Cesar cambiame esto
          src={QrMaps}
          alt="Cooperativa El Manguito"
          style={{ width: "100%", height: "auto", borderRadius: "16px" }}
        />
        <Stack
          spacing={1}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ textAlign: "center", mt: 2 }}
        >
          <Typography
            variant="h5"
            component="h2"
            color="third.main"
            sx={{ textAlign: "center", mb: 2, fontWeight: "bold" }}
          >
            Escanea el código QR
          </Typography>

          <Typography
            variant="body1"
            component="h3"
            color="text.secondary"
            sx={{ textAlign: "center", mb: 2 }}
          >
            Encuentranos en
          </Typography>
          <img
            src="https://jens.marketing/wp-content/uploads/2022/08/Design-ohne-Titel-2-1024x858.png"
            alt="TikTok Logo"
            style={{ width: "100px", height: "auto", borderRadius: "8px" }}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}
