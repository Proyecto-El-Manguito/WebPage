import React from "react";
import ActivitiesSection from "../../components/activitiesComponents/ActivitiesSection";
import { useTheme } from "@mui/material";
import { CustomContainer } from "../../components/titleComponents/CustomContainer";

const ActivitiesSections = () => {
  const theme = useTheme();
  return (
    <CustomContainer>
      <div className="py-8 ">
        <ActivitiesSection
          id={1}
          title="Producción Agropecuaria"
          description={`La base de nuestra cooperativa es la agricultura. Nos dedicamos
principalmente al cultivo de granos, que son fundamentales para la
seguridad alimentaria de las familias salvadoreñas. Nuestros asociados
trabajan bajo principios de sostenibilidad, aplicando prácticas
agroecológicas y cuidando el suelo y los recursos hídricos.`}
          imageSrc="https://i.imgur.com/lOKD6jw.jpeg"
          alt="Producción agropecuaria"
          imagePosition="right"
        />

        <ActivitiesSection
          id={2}
          title="Turismo Rural"
          description={`Uno de nuestros mayores orgullos es el balneario natural “La Pilona”, 
          un espacio gestionado de forma comunitaria que ofrece a los visitantes una experiencia
           única de contacto con la naturaleza`}
          imageSrc="https://i.imgur.com/jMoQRYu.jpeg"
          alt="Producción agropecuaria"
          imagePosition="left"
        />

        <ActivitiesSection
          id={3}
          title="Gestión Ambiental"
          description={`Somos conscientes de la importancia de cuidar nuestro entorno. 
          Por ello, impulsamos programas de reforestación comunitaria, recuperación de áreas degradadas
           y protección de fuentes de agua. Organizamos jornadas ecológicas, involucrando a jóvenes, 
           estudiantes y voluntarios de la zona.`}
          imageSrc="https://i.imgur.com/Sf6L1aa.jpeg"
          alt="Producción agropecuaria"
          imagePosition="right"
        />
      </div>
    </CustomContainer>
  );
};

export default ActivitiesSections;
