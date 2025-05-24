import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

export default function SliderInfiniteX({ images }) {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row" }}
      sx={{
        position: "absolute",
        right: 0,
        width: "50%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      <AnimatePresence initial={false}>
        {images.map((imgObj, index) => (
          <motion.img
            key={imgObj?.id}
            src={imgObj?.src}
            alt={`Imagen ${imgObj?.id}`}
            layout
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            style={{
              width: "350px",
              height: index === 0 ? "600px" : "400px",
              objectFit: "cover",
              borderRadius: "16px",
              marginRight: "16px",
              opacity: index === 0 ? 1 : 0.7,
              transform: index === 0 ? "scale(1.05)" : "scale(0.95)",
              zIndex: index === 0 ? 10 : 1,
            }}
          />
        ))}
      </AnimatePresence>
    </Stack>
  );
}

SliderInfiniteX.propTypes = {
  img: PropTypes.string.isRequired,
};
