import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Box, Container, Stack, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/genericComponents/StyledButton";
import img from "../../assets/img_vertical.jpg";

export default function OurHistoryCTA() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // sm = 600px por defecto
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 }); // amount = porcentaje visible para activar
  const navigate = useNavigate();
  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        minHeight: "110vh",
        height: "calc(auto + 100px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "third.main",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container>
        <Stack
          mt={8}
          direction="column"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/*Sección de imagenes */}
          <Stack
            spacing={isMobile ? 2 : 4}
            py={isMobile ? 2 : 4}
            direction={{
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            sx={{ justifyContent: "center", width: "100%" }}
          >
            {[0.2, 0.3, 0.4, 0.5].map((delay, i) => (
              <motion.div
                key={i}
                initial={
                  isMobile
                    ? { x: i % 2 === 0 ? -120 : 120, opacity: 0 }
                    : { y: i % 2 === 0 ? -120 : 120, opacity: 0 }
                }
                animate={
                  isMobile
                    ? isInView
                      ? { x: i % 2 === 0 ? -40 : 40, opacity: 1 }
                      : { x: i % 2 === 0 ? -80 : 80, opacity: 0 }
                    : isInView
                    ? { y: i % 2 === 0 ? -40 : 40, opacity: 1 }
                    : { y: i % 2 === 0 ? -80 : 80, opacity: 0 }
                }
                transition={{ duration: 1, delay, ease: "easeOut" }}
                style={{ zIndex: 2, position: "relative" }}
              >
                <Box
                  component="img"
                  src={img}
                  alt={`Imagen ${i + 1}`}
                  sx={{
                    width: isMobile ? "70vw" : "10vw",
                    height: isMobile ? "10vh" : "40vh",
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
                <DiamondNumber number={i + 1} isInView={isInView} />
              </motion.div>
            ))}
          </Stack>
          {/*Sección de texto y botón*/}
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={
              isInView
                ? { y: isMobile ? -40 : 0, opacity: 1 }
                : { y: 40, opacity: 0 }
            }
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            style={{ zIndex: 2, marginTop: "80px" }}
          >
            <Typography
              variant="h4"
              color="#fff"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                mb: 1,
              }}
            >
              Nuestra historia
            </Typography>
            <Typography
              variant="h6"
              color="#fff"
              sx={{
                textAlign: "center",
              }}
            >
              ACOAPASER de R. L. es una cooperativa agrícola que desde 1985 ha
              crecido con una administración técnica y estructurada, guiada por
              su consejo, lo que le ha permitido desarrollarse con controles
              organizados en sus actividades agrícolas.
            </Typography>
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Divider
                sx={{
                  width: "25%",
                  backgroundColor: "#fff",
                  marginTop: "20px",
                }}
              />
              <Typography color="white" variant="h6">
                o
              </Typography>
              <Divider
                sx={{
                  width: "25%",
                  backgroundColor: "#fff",
                  marginTop: "20px",
                }}
              />
            </Stack>
            <Stack justifyContent="center" alignItems="center" mt={-2}>
              <StyledButton
                title={"VER MÁS"}
                onClick={() => navigate("/history")}
              />
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
}

const DiamondNumber = ({ number, isInView }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "93%",
        transform: "translateX(-50%)",
        width: "50px",
        height: "50px",
        cursor: "pointer",
      }}
      component={motion.div}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1, rotate: 45 } : { scale: 0, rotate: 45 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 1 + number * 0.5 }}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 2,
        }}
      >
        {/* SVG animado */}
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{
            duration: 1,
            delay: 1 + number * 0.5,
            ease: "easeIn",
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <motion.rect
            x="10"
            y="10"
            width="80"
            height="80"
            rx="0"
            ry="0"
            stroke="white"
            strokeWidth="4"
            fill="transparent"
            pathLength={1}
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{
              duration: 1,
              delay: 1 + number * 0.5,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
        <Typography
          variant="h6"
          color="white"
          sx={{
            transform: "rotate(-45deg)",
            fontWeight: "bold",
          }}
        >
          {number}
        </Typography>
      </motion.div>
    </Box>
  );
};
