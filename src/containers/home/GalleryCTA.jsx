import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { SectionIntro } from "../../components/titleComponents/SectionIntro";
import { CustomContainer } from "../../components/titleComponents/CustomContainer";
import StyledLink from "../../components/genericComponents/StyledLink";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "https://i.imgur.com/MzH83n0.jpeg",
  },
  {
    color: "#d6d7dc",
    src: "https://i.imgur.com/bs3KZZT.jpeg",
  },
  {
    color: "#e3e3e3",
    src: "https://i.imgur.com/A34rKpz.jpeg",
  },
  {
    color: "#21242b",
    src: "https://i.imgur.com/m9XneZP.jpeg",
  },
];

const slider2 = [
  { color: "#d4e3ec", src: "https://i.imgur.com/jMoQRYu.jpeg" },
  {
    color: "#e5e0e1",
    src: "https://i.imgur.com/9eRgYPK.jpeg",
  },
  {
    color: "#d7d4cf",
    src: "https://i.imgur.com/Sf6L1aa.jpeg",
  },
  {
    color: "#e1dad6",
    src: "https://i.imgur.com/MzH83n0.jpeg",
  },
];

export default function GalleryCTA() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-[3vw] pb-20 relative bg-white z-[1]"
    >
      <CustomContainer>
        <SectionIntro title={"Galería"} id="Galeria">
          <p className="text-lg">Conoce nuestra galería</p>
        </SectionIntro>
      </CustomContainer>

      {/* Slider 1 */}
      <motion.div
        style={{ x: x1 }}
        className="flex gap-[3vw] w-[120vw] -left-[10vw] relative"
      >
        {slider1.map((project, index) => (
          <div
            key={index}
            className="aspect-square md:w-1/4 h-[30vh] md:h-[20vw] flex items-center justify-center"
            style={{ backgroundColor: project.color }}
          >
            <div className="relative w-[80%] h-[80%]">
              <img
                src={project.src}
                alt="image"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Slider 2 */}
      <motion.div
        style={{ x: x2 }}
        className="flex gap-[3vw] w-[120vw] -left-[10vw] relative"
      >
        {slider2.map((project, index) => (
          <div
            key={index}
            className="aspect-square md:w-1/4 h-[30vh] md:h-[20vw] flex items-center justify-center"
            style={{ backgroundColor: project.color }}
          >
            <div className="relative w-[80%] h-[80%]">
              <img
                src={project.src}
                alt="image"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        ))}
      </motion.div>

      <CustomContainer className="flex items-center justify-center">
        <StyledLink
          color="#000"
          width="32ch"
          title={"VER todas las fotos"}
          to="/history"
        />
      </CustomContainer>
    </div>
  );
}
