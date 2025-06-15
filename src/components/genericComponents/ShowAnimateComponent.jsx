import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

export function ShowAnimateComponent({
  children,
  delay = 0,
  show = true,
  duration = 0.5,
  exitDuration = 0.25,
  ...props
}) {
  return (
    <>
      <div style={{ overflow: "hidden", display: "inline-block" }}>
        <AnimatePresence>
          <motion.div
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              delay,
              duration: show ? duration : exitDuration,
              ease: "easeOut",
            }}
            {...props}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

ShowAnimateComponent.propTypes = {
  key: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  initial: PropTypes.object,
  animate: PropTypes.object,
  exit: PropTypes.object,
  show: PropTypes.bool.isRequired,
  duration: PropTypes.number,
  exitDuration: PropTypes.number,
};
