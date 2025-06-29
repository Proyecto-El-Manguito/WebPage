import React, { useRef } from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { Title } from "../../components/titleComponents/Title";
import { CustomContainer } from "../../components/titleComponents/CustomContainer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@mui/material";

const ActivitiesSection = ({
  title,
  description,
  imageSrc,
  alt,
  color,
  imagePosition = "right",
}) => {
  //asignar un color por defecto si no se proporciona
  const theme = useTheme();
  if (!color) {
    color = theme.palette.primary.dark; // Usa el color primario del tema
  }

  const desktopDirection =
    imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse";

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  // Imagen inicia grande y se reduce conforme hace scroll
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <Box
      ref={sectionRef}
      component="section"
      className={`relative flex flex-col ${desktopDirection} w-full rounded-lg overflow-hidden`}
    >
      {/* Imagen */}
      <div
        className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden"
        style={{
          borderRadius: imagePosition === "left" ? "0 0 0 5%" : "0 5% 0 0",
        }}
      >
        <motion.img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover"
          style={{
            scale: imageScale,
          }}
        />
      </div>

      {/* Contenido textual */}
      <Box component="div" className="flex flex-col justify-center md:w-1/2">
        <Box
          component="div"
          className="flex flex-col justify-center md:pr-8"
          sx={{
            padding: { xs: 2, md: 3, ld: 6 },
          }}
        >
          <Title className="mb-8" large style={{ color: color || "#275448" }}>
            {title}
          </Title>
          <p className="mb-4">{description}</p>
        </Box>
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
  color: PropTypes.string, // Color opcional para el fondo
  imagePosition: PropTypes.oneOf(["left", "right"]),
};
