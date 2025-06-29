import React from "react";
import { CustomContainer } from "../components/titleComponents/CustomContainer";
import IntroSection from "../components/genericComponents/IntroSection";
import { ParallaxIntroSection } from "../components/genericComponents/ParallaxIntroSection";
import MaskText from "../components/genericComponents/MaskText";
import Footer from "../containers/home/Footer";
import ProductsHero from "../containers/products/ProductsHero";
import ProductsCatalog from "../containers/products/ProductsCatalog";
import ProductsStory from "../containers/products/ProductsStory";
import ProductsImpact from "../containers/products/ProductsImpact";

export default function Products() {
  return (
    <main>
      <IntroSection
        image="https://i.imgur.com/LX0lMrm.jpeg"
        title="Productos"
      />
      <CustomContainer>
        <ProductsHero />
      </CustomContainer>
      <div className="bg-[#f6f5f1]">
        <ProductsCatalog />
      </div>

      <CustomContainer>
        <ProductsImpact />
      </CustomContainer>

      {/* <ParallaxIntroSection
        parallaxEffect={false}
        image="https://i.imgur.com/IJGwWpe.jpeg"
      >
        <div className="text-center flex items-center justify-center">
          <MaskText
            text="Bienvenido a la Nueva Experiencia"
            margin="20%"
            duration={0.2}
            className={`text-7xl  font-bold relative z-10 text-white`}
          />
        </div>
      </ParallaxIntroSection> */}

      <Footer></Footer>
    </main>
  );
}
