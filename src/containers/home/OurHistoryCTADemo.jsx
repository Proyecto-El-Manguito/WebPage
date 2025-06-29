import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { CustomContainer } from "../../components/titleComponents/CustomContainer";
import { Title } from "../../components/titleComponents/Title";
import { Box } from "@mui/material";
import StyledLink from "../../components/genericComponents/StyledLink";
import { motion, useScroll, useTransform } from "framer-motion";

export default function OurHistoryCTADemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const images = [
    {
      src: "https://i.imgur.com/A34rKpz.jpeg",
      y: 0,
      style: {
        // height: "20rem",
        maxWidth: "27rem",
        width: "80%",
        height: "100%",
        zIndex: 1,
        opacity: 0.95,
      },
    },
    {
      src: "https://i.imgur.com/gBYwqdo.jpeg",
      y: lg,
      className: "absolute",
      style: {
        left: "23rem",
        top: "12rem",
        height: "40vh",
        width: "30vh",
        zIndex: 2,
      },
    },
    {
      src: "https://i.imgur.com/MzH83n0.jpeg",
      y: md,
      className: "absolute",
      style: {
        left: "2.5vw",
        top: "20rem",
        height: "25vh",
        width: "20vh",
        zIndex: 3,
      },
    },
  ];

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <Box
      className="pt-4 md:pt-8 lg:pt-16"
      sx={{
        bgcolor: "white.main",
        color: "black.main",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        marginTop: "-30px",
        position: "relative",
        boxShadow: "0 -10px 20px rgba(0,0,0,0.1)",
      }}
    >
      <Box
        sx={{
          minHeight: "110vh",
          display: "flex",
        }}
        ref={container}
      >
        <CustomContainer as="section" ref={ref} className="grid !py-16 flex-1">
          <div className="items-center gap-16 md:grid md:grid-cols-2">
            <div className="flex w-full justify-center relative mb-20 mb:mb-0 md:h-screen">
              {images.map((image, i) => (
                <motion.div
                  style={{ y: image.y, ...image.style }}
                  key={`i_${i}`}
                  className={image.className}
                  // className="absolute"
                >
                  <img
                    src={image.src}
                    placeholder="blur"
                    alt="image"
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              style={{ zIndex: 2 }}
            >
              <Title large className="mb-8 mt-8 md:mt-0">
                Quienes somos
              </Title>
              <p className="mb-4">
                ACOAPASER de R. L. es una cooperativa agrícola que desde 1985 ha
                crecido con una administración técnica y estructurada, guiada
                por su consejo, lo que le ha permitido desarrollarse con
                controles organizados en sus actividades agrícolas.
              </p>
              <p className="mb-4">
                Conoce más sobre los recursos y productos con los que contamos.
              </p>
              <StyledLink
                color="#000"
                width="22ch"
                title={"VER MÁS"}
                to="/historia"
              />
            </motion.div>
          </div>
        </CustomContainer>
      </Box>
      {/* <motion.div style={{ height }} className="relative">
        <div className="absolute left-[-10%] h-[1550%] w-[120%] rounded-b-[50%] bg-white z-[1000] shadow-[0px_60px_50px_rgba(0,0,0,0.748)]"></div>
      </motion.div> */}
    </Box>
  );
}
