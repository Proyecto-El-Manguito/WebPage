import React from "react";
import IntroSection from "../components/genericComponents/IntroSection";
import { CustomContainer } from "../components/titleComponents/CustomContainer";
import { SectionIntro } from "../components/titleComponents/SectionIntro";
import Footer from "../containers/home/Footer";
import ComoLlegar from "../containers/location/ComoLlegar";
import { CtaGoogleMaps } from "../containers/location/CtaGoogleMaps";
import { GridQR } from "../containers/location/GridQR";
import { Box } from "@mui/material";
import LoaderAnimation from "../routes/LoaderAnimation";

export default function Location() {
  return (
    <main>
      <LoaderAnimation />

      <IntroSection
        image="https://i.imgur.com/7hfRa2D.jpeg"
        title="Como llegar"
      />

      <CustomContainer>
        <SectionIntro
          title={"¿Cómo llegar a Cooperativa El Manguito?"}
          id="Location"
        ></SectionIntro>
        <ComoLlegar />
      </CustomContainer>

      <Box my={12}>
        <CtaGoogleMaps />
      </Box>

      <CustomContainer>
        <GridQR />
      </CustomContainer>

      <Footer />
    </main>
  );
}
