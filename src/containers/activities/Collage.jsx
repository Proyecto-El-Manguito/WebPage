import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const IMAGE_URL = "https://i.imgur.com/FvoatYS.jpeg";

//  const svgMask = `
//     <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
//       <rect x='0'   y='25' width='30' height='75' fill='white'/>
//       <rect x='35'  y='5'  width='30' height='95' fill='white'/>
//       <rect x='70'  y='0'  width='30' height='100' fill='white'/>
//     </svg>`.replace(/\n/g, '').replace(/\s+/g, ' ').trim();

export default function CollageMask() {
  const svgMask = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
      <rect x='0'   y='5' width='33' height='85' rx='1' ry='1'  fill='white'/>
      <rect x='35'  y='0'  width='33' height='100' rx='1' ry='1'  fill='white'/>
      <rect x='70'  y='10'  width='30' height='85' rx='1' ry='1' fill='white'/>
    </svg>`
    .replace(/\n/g, "")
    .replace(/\s+/g, " ")
    .trim();

  const maskURL = `url("data:image/svg+xml;utf8,${encodeURIComponent(
    svgMask
  )}")`;

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 80 }}
      sx={{
        width: "100%",
        aspectRatio: "3 / 2",
        backgroundImage: `url(${IMAGE_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        WebkitMaskImage: maskURL,
        WebkitMaskSize: "100% 100%",
        maskImage: maskURL,
        maskSize: "100% 100%",
        outline: "1px solid white",
        outlineOffset: "-1px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    />
  );
}
