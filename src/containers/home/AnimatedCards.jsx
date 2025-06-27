import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { CustomContainer } from "../../components/titleComponents/CustomContainer";
import { Title } from "../../components/titleComponents/Title";
import StyledLink from "../../components/genericComponents/StyledLink";
import { SectionIntro } from "../../components/titleComponents/SectionIntro";
import { Box } from "@mui/material";

const projects = [
  {
    title: "Platillos",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "https://c8.alamy.com/comp/2E4D7DY/restaurant-dehor-vertical-bar-background-2E4D7DY.jpg",
    link: "https://i.imgur.com/sFRjABL.jpeg",
    color: "#E3F9F4",
  },
  {
    title: "Domicilio",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/c8/71/ca/sfeervol-interieur-met.jpg?w=900&h=500&s=1",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#D9F2F9",
  },
  {
    title: "Comunidad",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "https://i.imgur.com/yJUi6SPg.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#ebe9f4",
  },
];

const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-[6rem]"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-7vh + ${i * 10}px)`,
        }}
        className="relative  w-full rounded-[25px] px-4 sm:px-6 md:px-10 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-12 flex flex-col origin-top h-[80vh]"
      >
        <div className="h-full grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 self-center">
            <Title className="mb-8 mt-8 md:mt-0">{title}</Title>
            <p className="mb-4">{description}</p>
            <StyledLink
              color="#000"
              width="22ch"
              title={"VER MÁS"}
              to="/history"
            />
          </div>
          <div className="md:col-span-7 h-full rounded-2xl overflow-hidden">
            <motion.div style={{ scale: imageScale }} className="w-full h-full aspect-video">
              <img
                src={src}
                alt="image"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const AnimatedCards = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="relative bg-[#Fff] rounded-b-full">
      <div className="relative bg-[#F5F5F7] ">
        <CustomContainer as="section" ref={container}>
          <SectionIntro title={"Restaurante"} id="Restaurante">
            <p className="text-lg">Conoce nuestro restaurante</p>
          </SectionIntro>

          {projects.map((project, i) => {
            const start = i / projects.length;
            const end = (i + 1) / projects.length;
            const targetScale = 1 - (projects.length - i) * 0.05;

            return (
              <Card
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </CustomContainer>
      </div>

      <Box
        className="pt-4 md:pt-8 lg:pt-16"
        sx={{
          zIndex: 2,
          bgcolor: "#F5F5F7",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          marginBottom: "-30px",
          position: "relative",
        }}
      ></Box>
    </div>
  );
};

export default AnimatedCards;
