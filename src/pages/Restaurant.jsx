import React from "react";
import { CustomContainer } from "../components/titleComponents/CustomContainer";
import RestaurantHero from "../containers/restaurant/RestaurantHero";
import RestaurantVision from "../containers/restaurant/RestaurantVision";
import RestaurantGallery from "../containers/restaurant/RestaurantGallery";
import RestaurantFutureMessage from "../containers/restaurant/RestaurantFutureMessage";
import IntroSection from "../components/genericComponents/IntroSection";
import RestaurantValueProposition from "../containers/restaurant/RestaurantValueProposition";
import RestaurantLocation from "../containers/restaurant/RestaurantLocation";
import { ParallaxIntroSection } from "../components/genericComponents/ParallaxIntroSection";
import MaskText from "../components/genericComponents/MaskText";
import Footer from "../containers/home/Footer";

export default function Restaurant() {
  return (
    <main>
      <IntroSection
        image="https://i.imgur.com/Ukh3q9Q.jpeg"
        title="Restaurante"
        // backgroundOpacity={0.65}
        // overlayTextColor="text-white"
      />
      <CustomContainer>
        <RestaurantHero />
      </CustomContainer>

      <ParallaxIntroSection
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
      </ParallaxIntroSection>

      <CustomContainer>
        <RestaurantVision />
        <RestaurantGallery />
        <RestaurantFutureMessage />
      </CustomContainer>

      <RestaurantLocation />
      <CustomContainer>
        <RestaurantValueProposition />
      </CustomContainer>

      <Footer ></Footer>
    </main>
  );
}
