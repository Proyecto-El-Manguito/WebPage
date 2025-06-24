import React, { useRef } from "react";
import Box from "@mui/material/Box";
import { motion, useScroll, useTransform } from "framer-motion";
import { CustomContainer } from "../../components/titleComponents/CustomContainer";
import { Title } from "../../components/titleComponents/Title";

const ComoLlegar = () => {
  const mapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ["start end", "end start"],
  });
  const mapScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <Box component="main">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495626.6322923951!2d-89.86206697393507!3d13.953659605883281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6293000bf1b223%3A0xa024df36facd07c2!2sCooperativa%20El%20Manguito!5e0!3m2!1ses-419!2ssv!4v1747782028242!5m2!1ses-419!2ssv"
        width="100%"
        height="500"
        style={{
          border: 0,
          borderRadius: "16px",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación - Google Maps"
      ></iframe>
    </Box>
  );
};

export default ComoLlegar;