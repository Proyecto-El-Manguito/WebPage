import React from "react";
import propTypes from "prop-types";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Masonry } from "@mui/lab";
import StyledButton from "../../components/genericComponents/StyledButton";
import img from "../../assets/img_vertical.jpg";

const GridImages = [
  {
    src: img,
    alt: "Imagen destacada",
    width: "100%",
    height: "200px",
    delay: 0.2,
    x: -50,
    y: -50,
  },
  {
    src: img,
    alt: "Imagen destacada",
    width: "100%",
    height: "400px",
    delay: 0.3,
    x: 50,
    y: -50,
  },
  {
    src: img,
    alt: "Imagen destacada",
    width: "100%",
    height: "400px",
    delay: 0.4,
    x: -50,
    y: 50,
  },
  {
    src: img,
    alt: "Imagen destacada",
    width: "100%",
    height: "200px",
    delay: 0.5,
    x: 50,
    y: 50,
  },
];
export default function RestaurantCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const navigate = useNavigate();
  return (
    <Box
      bgcolor="background.grey"
      sx={{
        py: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* <ActivitiesCTAWaves width="100%" height="200px" /> */}

      <Container>
        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <motion.div
              initial={{ x: -120, opacity: 0 }}
              animate={
                isInView ? { x: 0, opacity: 1 } : { x: -120, opacity: 0 }
              }
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <Typography
                variant="h4"
                color="third.main"
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                Conoce nuestro restaurante
              </Typography>
              <Typography
                variant="h5"
                color="third.lighten"
                sx={{
                  textAlign: "left",
                  fontSize: {
                    xs: "1.25rem",
                    sm: "1.25rem",
                    md: "1.25rem",
                    lg: "1.25rem",
                    xl: "1.25rem",
                  },
                }}
              >
                Disfruta de una experiencia culinaria única en nuestro
                restaurante, donde la calidad y el sabor se unen para
                deleitarte. ¡Te esperamos para compartir momentos memorables y
                deliciosos!
              </Typography>
              <StyledButton
                title={"VER MÁS"}
                color={"#275448"}
                width={"100%"}
                onClick={() => navigate("/activities")}
              />
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 8 }}>
            <Grid item xs={12} sm={8} md={8}>
              <Masonry ref={ref} columns={{ xs: 1, sm: 2 }} spacing={1}>
                {GridImages.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: item?.y, x: item?.x, opacity: 0 }}
                    animate={
                      isInView
                        ? { y: 0, x: 0, opacity: 1 }
                        : { y: item?.y, x: item?.x, opacity: 0 }
                    }
                    transition={{
                      duration: 1,
                      delay: item?.delay,
                      ease: "easeOut",
                    }}
                  >
                    <Box
                      component="img"
                      src={item?.src}
                      alt={item?.alt}
                      sx={{
                        width: "100%",
                        height: item?.height,
                        objectFit: "cover",
                        borderRadius: 2,
                        display: "block",
                      }}
                    />
                  </motion.div>
                ))}
              </Masonry>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* <Box sx={{ transform: "rotate(180deg)" }}>
        <ActivitiesCTAWaves width="100%" height="200px" />
      </Box> */}
    </Box>
  );
}

RestaurantCTA.propTypes = {
  video: propTypes.string.isRequired,
};
