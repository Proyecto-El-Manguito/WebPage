import React from "react";
import ActivitiesSection from "../../components/activitiesComponents/ActivitiesSection";
import { CustomContainer } from "../../components/titleComponents/CustomContainer";

const AdditionalActivitiesSections = () => {
  return (
    <CustomContainer>
      <ActivitiesSection
        title="Nuestra Comunidad"
        description={`Cada familia es parte activa de la cooperativa, aportando con su trabajo,
           su conocimiento y su compromiso con el desarrollo colectivo.`}
        imageSrc="https://i.imgur.com/7hfRa2D.jpeg"
        alt="Producción agropecuaria"
        imagePosition="right"
      />
      <ActivitiesSection
        title="Vistas que Inspiran"
        description={`Desde nuestras tierras se contempla uno de los paisajes más imponentes del occidente salvadoreño:
           el majestuoso volcán que se alza como guardián de nuestra comunidad. 
           Este entorno natural no solo embellece nuestro día a día, 
          sino que fortalece nuestro compromiso con la conservación y el turismo sostenible..`}
        imageSrc="https://i.imgur.com/MgFcWPM.jpeg"
        alt="Producción agropecuaria"
        imagePosition="left"
      />
    </CustomContainer>
  );
};

export default AdditionalActivitiesSections;
