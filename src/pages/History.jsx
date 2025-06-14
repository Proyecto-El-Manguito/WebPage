import React from "react";
import IntroSection from "../components/genericComponents/IntroSection";
import { CustomContainer } from "../components/titleComponents/CustomContainer";
import { SectionIntro } from "../components/titleComponents/SectionIntro";
import TimelineSection from "../containers/history/TimelineSection";
import Footer from "../containers/home/Footer";

export default function History() {
  return (
    <main>
      <IntroSection
        image="https://i.imgur.com/FvoatYS.jpeg"
        title="Historia"
        // backgroundOpacity={0.65}
        // overlayTextColor="text-white"
      />

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
