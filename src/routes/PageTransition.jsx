import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useNavigationDelay } from "./NavigationDelayContext";

const ANIMATION_DURATION = 1;
const EXIT_DURATION = 1;
const EASE = [0.76, 0, 0.24, 1];

function getPaths(width, height, upperCurve) {
  // const upperCurve = 300;
  const lowerCurve = height + 200;
  const heightElement = lowerCurve + 200;

  const initial = `
    M0,${upperCurve}
    Q${width / 2},0 ${width},${upperCurve}
    L${width},${heightElement}
    Q${width / 2},${heightElement + upperCurve} 0,${heightElement}
    L0 0
  `;
  const target = `
    M0,${upperCurve}
    Q${width / 2},0 ${width},${upperCurve}
    L${width},${heightElement}
    Q${width / 2},${heightElement} 0,${heightElement}
    L0 0
  `;
  return { initial, target };
}

export default function PageTransition({ color = "#fff" }) {
  const location = useLocation();
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const { newTitle, newPath } = useNavigationDelay();

  useEffect(() => {
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const [show, setShow] = useState(true);

  // desmontar tras 2 segundos
  useEffect(() => {
    console.log("[Tran] newPath", newPath)
    setShow(true);
    const t = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(t);
  }, [newPath]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <CurveSVG
          key={newPath} // la clave hace que AnimatePresence monte y desmonte correctamente
          {...dimensions}
          color={color}
          message={newTitle}
        />
      )}
    </AnimatePresence>
  );
}

function CurveSVG({ width, height, color, message }) {
  
  const upperCurve = height * 0.20;
  const { initial, target } = getPaths(width, height, upperCurve);

  return (
    <motion.div
      className="fixed left-0 top-0 w-screen"
      style={{
        height: height + 600,
        zIndex: 9999,
        pointerEvents: "none",
      }}
      initial={{ top: "100vh" }}
      animate={{ top: "-280px" }}
      exit={{
        top: `-${height + 600}px`, // Sale completamente de la pantalla
        transition: { duration: EXIT_DURATION, ease: EASE },
      }}
      transition={{
        duration: ANIMATION_DURATION,
        delay: 0.2,
        ease: EASE,
      }}
    >
      <motion.svg
        width={width}
        height={height + 600}
        className="block"
        initial={false}
      >
        <motion.path
          fill={color}
          stroke={color}
          strokeWidth={1}
          variants={{
            initial: { d: initial },
            animate: {
              d: initial,
              transition: {
                duration: ANIMATION_DURATION,
                delay: 0.2,
                ease: EASE,
              },
            },
            exit: {
              d: target,
              transition: { duration: EXIT_DURATION, ease: EASE },
            },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </motion.svg>

      <motion.div
        className="absolute w-full h-full flex justify-center items-center"
        style={{
          // top: "56vh", // Ajusta según la forma y altura de tu SVG
          // top: `${height + 600}px`, // Sale completamente de la pantalla
          width: "100%",
          top: "0%",
          pointerEvents: "none",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
        }}
      >
        <span
          style={{
            fontSize: 48,
            color: "#333",
            fontWeight: 700,
            textShadow: "0 4px 12px #fff, 0 1px 10px #aaa",
            letterSpacing: "2px",
          }}
        >
          {message}
        </span>
      </motion.div>
    </motion.div>
  );
}
