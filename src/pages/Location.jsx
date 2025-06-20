import React from "react";
import IntroSection from "../components/genericComponents/IntroSection";
import { CustomContainer } from "../components/titleComponents/CustomContainer";
import { SectionIntro } from "../components/titleComponents/SectionIntro";
import Footer from "../containers/home/Footer";
import ComoLlegar from "../containers/location/ComoLlegar";

export default function Location() {
  return (
    <main>
      <IntroSection image="https://i.imgur.com/7hfRa2D.jpeg" title="Como llegar" />

      <CustomContainer>
        <SectionIntro
          title={"¿Cómo llegar a Cooperativa El Manguito?"}
          id="gistory"
        ></SectionIntro>
        <ComoLlegar />
      </CustomContainer>

      <Footer />
    </main>
  );
}
