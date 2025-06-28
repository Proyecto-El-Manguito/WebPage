import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MaskText = ({
  text,
  className = "",
  divClassName = "",
  margin = "-75%",
  duration = 0.65,
  startDelay = 0, // en segundos
}) => {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: margin });

  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: duration,
        ease: [0.33, 1, 0.68, 1],
        delay: startDelay + 0.075 * i,
      },
    }),
  };

  const letters = text.split("");

  return (
    <div ref={body} className={`overflow-hidden relative ${divClassName}`}>
      <div className="flex">
        {letters.map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={animation}
            initial="initial"
            animate={isInView ? "enter" : ""}
            className={className}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default MaskText;
