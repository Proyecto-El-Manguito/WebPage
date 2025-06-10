import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import LocationCTA from "./LocationCTAContainers/LocationCTA";
import ContactUsCTA from "./LocationCTAContainers/ContactUsCTA";
import ProductsCTA from "./LocationCTAContainers/ProductsCTA";
import { CustomContainer } from "../../components/titleComponents/CustomContainer";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function LocationAndMapCTA() {
 const ref = useRef(null);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <Stack
      sx={{
        position: "relative",
        paddingY: 8,
        height: "calc(auto + 100px)",
      }}
      ref={container}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "#e5e5e7",
          zIndex: 1,
        }}
        // background: "linear-gradient(to bottom, #D9D9D9, #275448)",
      />
      <CustomContainer className="z-10">
        {/* Sección en general */}
        <Stack spacing={2}>
          {/* Sección de location */}
          <LocationCTA />
          {/* Sección de contacto y productos */}
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <ContactUsCTA />
            <ProductsCTA />
          </Grid>
        </Stack>
      </CustomContainer>
      

      {/* <motion.div style={{ height }} className="relative">
        <div className="absolute left-[-10%] h-[1550%] w-[120%] rounded-b-[50%] bg-red-500 z-[1000] shadow-[0px_60px_50px_rgba(0,0,0,0.748)]"></div>
      </motion.div> */}
    </Stack>
  );
}
