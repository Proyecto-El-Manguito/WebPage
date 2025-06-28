import React from "react";
import { CustomContainer } from "../components/titleComponents/CustomContainer";
import { SectionIntro } from "../components/titleComponents/SectionIntro";
import IntroSection from "../components/genericComponents/IntroSection";
import Footer from "../containers/home/Footer";
import GallerySection from "../containers/gallery/GallerySection";
const sampleImages = [
  { src: "https://i.imgur.com/bs3KZZT.jpeg", alt: "Imagen 1" },
  { src: "https://i.imgur.com/m9XneZP.jpeg", alt: "Imagen 2" },
  { src: "https://i.imgur.com/lOKD6jw.jpeg", alt: "Imagen 3" },
  { src: "https://i.imgur.com/Sf6L1aa.jpeg", alt: "Imagen 4" },
  { src: "https://i.imgur.com/9eRgYPK.jpeg", alt: "Imagen 1" },
  { src: "https://i.imgur.com/FvoatYS.jpeg", alt: "Imagen 2" },
  { src: "https://i.imgur.com/7hfRa2D.jpeg", alt: "Imagen 3" },
  { src: "https://i.imgur.com/9HAjD7F.jpeg", alt: "Imagen 4" },
  { src: "https://i.imgur.com/OpHWsta.jpeg", alt: "Imagen 4" },
  { src: "https://i.imgur.com/MgFcWPM.jpeg", alt: "Imagen 4" },
];
export default function Gallery() {
  return (
    <main>
      <IntroSection image="https://i.imgur.com/bs3KZZT.jpeg" title="Galeria" />

      <CustomContainer>
        <SectionIntro
          title={"Conoce nuestras imagenes"}
          id="gistory"
        ></SectionIntro>
        <GallerySection images={sampleImages} />
      </CustomContainer>

      <Footer />
    </main>
  );
}
