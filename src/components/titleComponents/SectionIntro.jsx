import React from "react";
import { motion } from "framer-motion";

export function SectionIntro({
  title,
  id,
  eyebrow,
  children,
  smaller = false,
  vertical = false,
  className = "py-8 md:py-10 my-6 md:my-8",
  ...props
}) {
  return (
    <div {...props} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {eyebrow && (
          <span className="mb-6 block font-d isplay text-base font-semibold">
            {eyebrow}
          </span>
        )}

        {vertical && children ? (
          <>
            <h2
              id={id}
              className={`scroll-top  font-poly font-bold title ${
                smaller ? "text-5xl" : "text-7xl"
              }`}
            >
              {title}
            </h2>
            <div className="mt-6 text-lg ">{children}</div>
          </>
        ) : children ? (
          <div className="grid md:grid-cols-2 w-full gap-8">
            <h2
              id={id}
              className={`scroll-top  font-poly font-bold title ${
                smaller ? "text-5xl" : "text-7xl"
              }`}
            >
              {title}
            </h2>
            <div className="text-lg ">{children}</div>
          </div>
        ) : (
          <h2
            id={id}
            className={`scroll-top  font-poly font-bold title ${
              smaller ? "text-5xl" : "text-7xl"
            }`}
          >
            {title}
          </h2>
        )}
      </motion.div>
    </div>
  );
}
