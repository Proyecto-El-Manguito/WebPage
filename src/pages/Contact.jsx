import React from "react";
import IntroSection from "../components/genericComponents/IntroSection";
import { CustomContainer } from "../components/titleComponents/CustomContainer";
import { SectionIntro } from "../components/titleComponents/SectionIntro";
import Footer from "../containers/home/Footer";
import ContactSection from "../containers/contact/ContactSection";

export default function Contact() {
  return (
    <main>
      <IntroSection image="https://i.imgur.com/7hfRa2D.jpeg" title="Contacto" />

      <CustomContainer>
        <SectionIntro title={"Contactanos"} id="gistory"></SectionIntro>
        <ContactSection />
      </CustomContainer>

      <Footer />
    </main>
  );
}
