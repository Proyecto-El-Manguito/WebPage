import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

export default function VideoComponent({
  video,
  parallax = false,
  zIndex = -1,
  overlayOpacity = 0,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // 👈 fuerza recarga de la nueva fuente
    }
  }, [video]);

  return (
    <AnimatePresence>
      <div
        style={{
          position: parallax ? "fixed" : "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <motion.video
          key={video}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
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

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
            pointerEvents: "none",
          }}
        />
      </div>
    </AnimatePresence>
  );
}

VideoComponent.propTypes = {
  video: PropTypes.string.isRequired,
  parallax: PropTypes.bool,
  zIndex: PropTypes.number,
  overlayOpacity: PropTypes.number,
};
