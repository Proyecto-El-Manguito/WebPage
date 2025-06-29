import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MaskText = ({
  text,
  className = "",
  divClassName = "",
  margin = "-75%",
  duration = 0.65,
  startDelay = 0,
}) => {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin });

  const words = text.split(" ");

  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration,
        ease: [0.33, 1, 0.68, 1],
        delay: startDelay + 0.075 * i, // Delay GLOBAL, ver abajo
      },
    }),
  };

  // Calcule el índice global para cada letra
  let letterIndex = 0;
  return (
    <div
      ref={body}
      className={`overflow-hidden relative ${divClassName}`}
      style={{ wordBreak: "break-word" }}
    >
      <div style={{ display: "block", whiteSpace: "normal" }}>
        {words.map((word, wIdx) => {
          // Almacene el índice inicial de la palabra
          const startIdx = letterIndex;
          return (
            <span
              key={wIdx}
              style={{
                display: "inline-block",
                whiteSpace: "pre",
                pr: 1,
              }}
            >
              {word.split("").map((char, cIdx) => {
                const globalIdx = letterIndex++;
                return (
                  <motion.span
                    key={cIdx}
                    custom={globalIdx}
                    variants={animation}
                    initial="initial"
                    animate={isInView ? "enter" : ""}
                    className={className}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                );
              })}
              {/* Espacio después de cada palabra, salvo la última */}
              {wIdx !== words.length - 1 ? " " : ""}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default MaskText;
