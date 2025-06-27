import React, { useRef } from "react";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";

import { Link as RouterLink } from "react-router-dom";

export default function StyledLink({
  title,
  to,
  href,
  color = "#fff",
  width,
  minWidth,
  target = "_self",
  rel,
  backgroundColor = "#a7d5a2",
  ...props
}) {
  const controls = useAnimation();
  const buttonRef = useRef(null);

  const handleMouseEnter = async () => {
    await controls.set({ top: "100%", opacity: 1 });
    await controls.start({
      top: "-50%",
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  };

  const handleMouseLeave = () => {
    controls.start({
      top: "-250%",
      transition: { duration: 0.3 },
    });
  };

  const isInternal = Boolean(to);

  return (
    <Button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      component={isInternal ? RouterLink : "a"}
      {...(isInternal ? { to } : { href, target, rel })}
      variant="outlined"
      disableRipple
      sx={{
        position: "relative",
        marginTop: "20px",
        padding: "10px 20px",
        fontSize: "1rem",
        fontWeight: "bold",
        width: width,
        minWidth: minWidth,
        color: color,
        overflow: "hidden",
        borderRadius: 8,
        border: `2px solid ${color}`,
        textAlign: "center",
        textDecoration: "none",
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.1)",
        },
      }}
      {...props}
    >
      {title}
      <motion.div
        animate={controls}
        initial={{ top: "100%", opacity: 1 }}
        className="absolute w-[100%] h-[200%] left-1/2 -translate-x-1/2 rounded-full z-[-1]"
        style={{
          backgroundColor,
          borderRadius: "50% / 25%",
        }}
      />
    </Button>
  );
}
