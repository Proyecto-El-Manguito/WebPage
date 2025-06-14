// src/components/layout/ActivitiesSection.jsx
import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { Title } from "../../components/titleComponents/Title";
import { CustomContainer } from "../../components/titleComponents/CustomContainer";

const ActivitiesSection = ({
  title,
  description,
  imageSrc,
  alt,
  imagePosition = "right", // "left" | "right"
}) => {
  const desktopDirection =
    imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse";

  return (
    <Box
      component="section"
      className={`relative flex flex-col ${desktopDirection} w-full rounded-lg overflow-hidden`}
    >
      {/* Imagen */}
      <img
        src={imageSrc}
        alt={alt}
        className="w-full md:w-1/2 h-64 md:h-auto object-cover"
      />

      {/* Contenido textual */}
      <Box
        component="div"
        className="flex flex-col justify-center p-8 md:w-1/2 bg-white"
      >
        <CustomContainer className="!max-w-3xl">
          <Box component="div" className="flex flex-col justify-center md:pr-8">
            <Title className="mb-8" large>{title}</Title>
            <p className="mb-4">{description}</p>
          </Box>
        </CustomContainer>
      </Box>
    </Box>
  );
};

export default ActivitiesSection;

ActivitiesSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
  imagePosition: PropTypes.oneOf(["left", "right"]),
};
