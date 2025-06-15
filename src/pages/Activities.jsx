import React from "react";
import IntroSection from "../components/genericComponents/IntroSection";
import { CustomContainer } from "../components/titleComponents/CustomContainer";
import { SectionIntro } from "../components/titleComponents/SectionIntro";
import Footer from "../containers/home/Footer";
import ActivitiesSections from "../containers/activities/ActivitiesSections";
import VisionSection from "../containers/activities/VisionSection";
import HeroWithScrollEffect from "../components/activitiesComponents/HeroWithScrollEffect";
import AdditionalActivitiesSections from "../containers/activities/AdditionalActivitiesSections";
import { Divider, Stack } from "@mui/material";

export default function Activities() {
  return (
    <main>
      <IntroSection
        image="https://i.imgur.com/MzH83n0.jpeg"
        title="Actividades"
      />

      <CustomContainer>
        <SectionIntro
          title={"Conoce nuestras actividades"}
          id="history"
          divider={true}
        ></SectionIntro>
      </CustomContainer>
      <ActivitiesSections />
      <HeroWithScrollEffect />

      <VisionSection />
      <AdditionalActivitiesSections />
      <Footer />
    </main>
  );
}
