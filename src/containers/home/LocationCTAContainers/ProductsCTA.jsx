import React, { useRef } from "react";
import { Grid, Stack, Typography, Box } from "@mui/material";
import { motion, useInView } from "framer-motion";
import StyledButton from "../../../components/genericComponents/StyledButton";
import { useNavigate } from "react-router-dom";
import imgTest from "../../../assets/mango.png";
import StyledLink from "../../../components/genericComponents/StyledLink";

export default function ProductsCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const navigate = useNavigate();

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: isInView ? 1 : 0,
      y: 0,
      transition: {
        delay: 1 + i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Grid
      ref={ref}
      size={{ xs: 12, sm: 12, md: 6 }}
      bgcolor="white.main"
      sx={{
        minHeight: "22rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        borderRadius: 2,
        position: "relative",
        overflow: "hidden",
        border: 3,
        borderColor: "#275448",
      }}
    >
      <div className="z-[0] opacity-65">
        <div className="absolute bottom-1/2 left-0 w-[800px] h-[800px] rounded-full bg-[#bee0d7] flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-[#7ac1ae]"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <Stack
        spacing={2}
        sx={{
          width: "100%",
          height: "100%",
          padding: { xs: 2, md: 3, ld: 6 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        {[
          {
            component: (
              <Typography variant="h4" color="third.main" fontWeight={700}>
                Nuestros Productos
              </Typography>
            ),
          },
          {
            component: (
              <Typography variant="h6" color="third.lighten" textAlign="left">
                Descubre la variedad de productos que ofrecemos en nuestra
                cooperativa.
              </Typography>
            ),
          },
          {
            component: (
              // <StyledButton
              //   title="Ver más"
              //   variant="contained"
              //   color="#275448"
              //   onClick={() => navigate("/contacto")}
              //   width="fit-content"
              // />

              <StyledLink
                color="#275448"
                minWidth="20ch"
                title={"Ver más"}
                to="/productos"
              />
            ),
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            custom={i}
          >
            {item.component}
          </motion.div>
        ))}
      </Stack>
    </Grid>
  );
}
