import React, { useRef } from "react";
import { Grid, Typography, Divider } from "@mui/material";
import { motion, useInView } from "framer-motion";
import StyledButton from "../../../components/genericComponents/StyledButton";
import { useNavigate } from "react-router-dom";
import StyledLink from "../../../components/genericComponents/StyledLink";

export default function LocationCTA() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: isInView ? 1 : 0,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={textVariants}
      custom={0}
      style={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Grid
        ref={ref}
        container
        sx={{
          bgcolor: "white.main",
          minHeight: "20rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 2,
          boxShadow: 2,
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Grid
          size={{ xs: 12, sm: 12, md: 4 }}
          sx={{
            padding: { xs: 4, sm: 4, md: 6 },
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            custom={1}
            style={{
              overflow: "hidden",
            }}
          >
            <Typography variant="h4" color="third.main" fontWeight={700}>
              Ubicación
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
            <Typography
              variant="h6"
              color="third.lighten"
              sx={{
                textAlign: "left",
              }}
            >
              Visita nuestra cooperativa y descubre todo lo que ofrecemos.
            </Typography>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            custom={3}
            style={{
              overflow: "hidden",
            }}
          >
            <Divider
              sx={{
                width: "100%",
                backgroundColor: "#275448",
                marginY: "8px",
              }}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            custom={4}
            style={{
              overflow: "hidden",
            }}
          >
            <Typography
              variant="body1"
              color="third.lighten"
              sx={{
                textAlign: "left",
                mb: 6,
                // mt: 2,
              }}
            >
              Calle Principal, Ciudad, País
            </Typography>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            custom={5}
            style={{
              overflow: "hidden",
            }}
          >
            {/* <StyledButton
              width={"100%"}
              color="#275448"
              title={"VER MÁS"}
              onClick={() => navigate("/location")}
              sx={{
                marginTop: 2,
              }}
            /> */}
            <StyledLink
              color="#275448"
              minWidth="20ch"
              title={"Ver mas"}
              href="/location"
            />
          </motion.div>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 8 }}
          sx={{
            height: "60vh",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            custom={6}
            style={{
              overflow: "hidden",
              height: "100%",
              borderRadius: "0px 20px 20px 0px",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495626.6322923951!2d-89.86206697393507!3d13.953659605883281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6293000bf1b223%3A0xa024df36facd07c2!2sCooperativa%20El%20Manguito!5e0!3m2!1ses-419!2ssv!4v1747782028242!5m2!1ses-419!2ssv"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "0px 20px 20px 0px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación - Google Maps"
            ></iframe>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
}
