import React from "react";
import IntroSection from "../containers/history/IntroSection";
import { CustomContainer } from "../components/titleComponents/CustomContainer";
import { SectionIntro } from "../components/titleComponents/SectionIntro";
import TimelineSection from "../containers/history/TimelineSection";
import Footer from "../containers/home/Footer";

export default function History() {
  return (
    <main>
      <IntroSection></IntroSection>
      <CustomContainer>
        <SectionIntro
          title={"Conoce nuestra historia"}
          id="gistory"
        ></SectionIntro>
        <TimelineSection />
      </CustomContainer>
      <Footer />
    </main>
  );
}
