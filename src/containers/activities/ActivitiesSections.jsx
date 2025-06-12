import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container, Typography, Button } from "@mui/material";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const activities = [
  {
    title: "Senderismo",
    description: "Camina entre montañas vivas, conectando cuerpo y mente.",
    image: "https://i.imgur.com/Z8LRmfn.jpeg",
  },
  {
    title: "Acampamento",
    description: "Vive la noche bajo estrellas infinitas y fuego acogedor.",
    image: "https://i.imgur.com/tJgvw4C.jpeg",
  },
  {
    title: "Piscinas",
    description: "Relájate en aguas cristalinas rodeadas de naturaleza pura.",
    image: "https://i.imgur.com/t83cNlL.png",
  },
];

export default function ActivitiesSections() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div className="text-white font-sans scroll-smooth">
      {/* Hero Section */}
      <section className="h-screen w-full relative">
        <img
          src="https://i.imgur.com/Z8LRmfn.jpeg"
          alt="Hero"
          className="absolute w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 flex items-center justify-center h-full flex-col text-center px-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl md:text-7xl font-bold tracking-tight"
          >
            Naturaleza. Emoción. Recuerdo.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-white/80"
          >
            Senderismo, acampamento y piscinas inmersas en paisajes inolvidables.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <Button
              variant="contained"
              color="primary"
              className="rounded-full px-6 py-2"
            >
              Descubre más
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section
        ref={containerRef}
        className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-10"
      >
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: index * 0.2 }}
            className="rounded-3xl overflow-hidden group relative shadow-2xl"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <Typography variant="h5" className="font-semibold mb-2">
                {activity.title}
              </Typography>
              <Typography variant="body1" className="text-white/80 text-sm">
                {activity.description}
              </Typography>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
