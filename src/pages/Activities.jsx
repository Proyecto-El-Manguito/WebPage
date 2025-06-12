import React from "react";
import IntroSection from "../containers/activities/IntroSection";
import { CustomContainer } from "../components/titleComponents/CustomContainer";
import { SectionIntro } from "../components/titleComponents/SectionIntro";
import Footer from "../containers/home/Footer";
import ActivitiesSections from "../containers/activities/ActivitiesSections";
import VisionSection from "../containers/activities/VisionSection";

export default function Activities() {
  return <main>
     <IntroSection></IntroSection>
      <CustomContainer>
        <SectionIntro
          title={"Conoce nuestras actividades"}
          id="gistory"
        ></SectionIntro>
        <ActivitiesSections />
        <VisionSection />
      </CustomContainer>
      <Footer />
  </main>;
}
