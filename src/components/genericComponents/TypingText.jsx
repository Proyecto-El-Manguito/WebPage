import React from "react";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function TypingText({ text, speed = 50, ...props }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let index = -1;
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (index < text.length) {
          return prev + text[index];
        } else {
          return prev;
        }
      });
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <Typography {...props}>
      {displayedText}
      <span
        style={{
          borderRight: "2px solid",
          marginLeft: 2,
          animation: "blink 1s step-end infinite",
        }}
      />
    </Typography>
  );
}

TypingText.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
};
