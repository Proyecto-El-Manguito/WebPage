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
  const isInView = useInView(ref, { once: false, amount: 0.3 }); // amount = porcentaje visible para activar
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
          my={8}
          direction="column"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/*Sección de imagenes */}
          <Stack
            spacing={isMobile ? 2 : 4}
            direction={{
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
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
                style={{ zIndex: 2 }}
              >
                <Box
                  component="img"
                  src={img}
                  alt={`Imagen ${i + 1}`}
                  sx={{
                    width: isMobile ? "70vw" : "12vw",
                    height: isMobile ? "10vh" : "45vh",
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
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
