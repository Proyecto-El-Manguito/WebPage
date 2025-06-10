import React, { useRef } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import StyledButton from "../../../components/genericComponents/StyledButton";
import { useNavigate } from "react-router-dom";
import StyledLink from "../../../components/genericComponents/StyledLink";

export default function ContactUsCTA() {
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
        overflow: "hidden",
        background: "#275448",
      }}
    >
      <Stack
        spacing={2}
        sx={{
          width: "100%",
          height: "100%",
          padding: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          custom={0}
          style={{
            overflow: "hidden",
          }}
        >
          <Typography variant="h4" color="white.main" fontWeight={700}>
            Contáctanos
          </Typography>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          custom={1}
          style={{
            overflow: "hidden",
          }}
        >
          <Typography
            variant="h6"
            color="white.darken"
            sx={{
              textAlign: "left",
            }}
          >
            Estamos aquí para ayudarte. Si tienes alguna pregunta o necesitas
            más información, no dudes en contactarnos.
          </Typography>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          custom={2}
          style={{
            overflow: "hidden",
          }}
        >
          <StyledLink
            color="#fff"
            minWidth="20ch"
            title={"Contáctanos"}
            href="/contacto"
          />
        </motion.div>
      </Stack>
    </Grid>
  );
}
