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
    <Box component="main" className="w-full bg-gray-50">
      <p className="max-w-2xl text-lg mb-24">
        Ubicados en Hacienda Cooperativa El Manguito, Chalchuapa, Santa Ana, te
        invitamos a que nos visites y conozcas el corazón de nuestra producción
        agroecológica. Aquí tienes una guía interactiva para llegar con
        facilidad:
      </p>
      <motion.div
        ref={mapRef}
        //   style={{ scale: mapScale }}
        className="transform-gpu transition-transform duration-500 rounded-2xl overflow-hidden shadow-2xl"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495626.6322923951!2d-89.86206697393507!3d13.953659605883281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6293000bf1b223%3A0xa024df36facd07c2!2sCooperativa%20El%20Manguito!5e0!3m2!1ses-419!2ssv!4v1747782028242!5m2!1ses-419!2ssv"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación - Google Maps"
        ></iframe>
      </motion.div>
      <Box className="mt-12 text-center space-y-4">
        <motion.a
          href="https://www.google.com/maps/dir//Cooperativa+El+Manguito,+Chalchuapa,+Santa+Ana"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-green-700 text-white font-semibold rounded-full shadow-lg hover:bg-green-800 transition-colors"
        >
          Abrir en Google Maps
        </motion.a>
        <p className="text-gray-600 max-w-xl mb-12 mx-auto">
          Recomendamos abrir la ruta en Google Maps desde tu celular o navegador
          para recibir instrucciones paso a paso. Si vienes de San Salvador,
          viaja por la CA-1 y sigue hacia Oeste, toma la salida hacia Chalchuapa
          y sigue señales hacia “El Manguito”.
        </p>
      </Box>
    </Box>
  );
};

export default ComoLlegar;
