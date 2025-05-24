import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

export default function VideoComponent({
  video,
  parallax = false,
  zIndex = -1,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // 👈 fuerza recarga de la nueva fuente
    }
  }, [video]);

  return (
    <AnimatePresence>
      <motion.video
        key={video}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "spring" }}
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: parallax ? "fixed" : "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "scaleX(-1)",
          zIndex,
          pointerEvents: "none",
        }}
      >
        <source src={video} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </motion.video>
    </AnimatePresence>
  );
}

VideoComponent.propTypes = {
  video: PropTypes.string.isRequired,
  parallax: PropTypes.bool,
  zIndex: PropTypes.number,
};
