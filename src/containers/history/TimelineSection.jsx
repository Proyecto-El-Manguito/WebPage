import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Title } from "../../components/titleComponents/Title";
import { Box, useTheme } from "@mui/material";

const timelineData = [
  {
    year: "Febrero 2025",
    title: "Inicios",
    location: "Paris",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    image: "https://i.imgur.com/faHfpc1.png",
  },
  {
    year: "marzo 2025",
    title: "Desarollo Begins",
    location: "Amsterdam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    image: "https://i.imgur.com/Q2IMBBU.jpeg",
  },
  {
    year: "Junio 2025",
    title: "Finalizacion",
    location: "Rotterdam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incie et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    image: "https://i.imgur.com/t83cNlL.png",
  },
];

const TimelineItem = ({ item, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const theme = useTheme();

  const isLeft = index % 2 === 0;

  return (
    <div className="relative w-full flex flex-col md:flex-row justify-center items-stretch mb-16">
      {/* Card izquierda o full-width en mobile */}
      <div className="w-full md:w-1/2 md:px-8 flex md:justify-end md:items-center">
        {isLeft && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-right md:text-right text-left"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg w-full">
              <p className="text-sm text-gray-500">
                {item.location} {item.year}
              </p>
              <Title
                as="h3"
                large
                className="mb-4 mt-4 md:mt-0"
                style={{ color: theme.palette.third.main }}
              >
                {item.title}
              </Title>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg w-full shadow-md"
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* Línea vertical + punto */}
      <Box
        sx={{
          display: { sm: "none", md: "block" },
        }}
      >
        <div
          className="
        absolute
        left-6 md:left-1/2
        top-0
          h-full
          flex flex-col items-center
          z-10
          "
        >
          <div
            style={{ backgroundColor: theme.palette.secondary.main }}
            className="w-4 h-4 rounded-full shadow-md ring-4 ring-white z-10"
          />
          <div className="w-[2px] h-full bg-gray-300" />
        </div>
      </Box>

      {/* Card derecha o full-width en mobile */}
      <div className="w-full md:w-1/2 md:px-8 flex md:justify-start md:items-center">
        {!isLeft && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg w-full">
              <p className="text-sm text-gray-500">
                {item.location} {item.year}
              </p>
              <Title
                as="h3"
                large
                className="mb-4 mt-4 md:mt-0"
                style={{ color: theme.palette.third.main }}
              >
                {item.title}
              </Title>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg w-full shadow-md"
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default function TimelineSection() {
  return (
    <section className="relative py-20 px-2 md:px-0">
      {timelineData.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </section>
  );
}
