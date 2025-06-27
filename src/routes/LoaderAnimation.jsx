import React, { useRef, useEffect } from "react";

const LoaderAnimation = () => {
  const loader = useRef(null);
  const path = useRef(null);

  const initialCurve = 200;
  const duration = 600;
  const animating = useRef(false);
  const start = useRef();

  // Usa el alto completo de la ventana
  const getLoaderHeight = () => window.innerHeight + 200; // 200px extra si deseas efecto fuera de pantalla

  useEffect(() => {
    let animationFrameId;
    let timeoutId;

    const animate = (timestamp) => {
      if (!animating.current) return;

      if (start.current === undefined) {
        start.current = timestamp;
      }
      const elapsed = timestamp - start.current;

      let newCurve;
      let final = false;
      if (elapsed >= duration) {
        newCurve = initialCurve - 200;
        final = true;
      } else {
        newCurve = easeOutQuad(elapsed, initialCurve, -200, duration);
      }

      setPath(newCurve);

      if (loader.current) {
        const top = final
          ? -getLoaderHeight()
          : easeOutQuad(elapsed, 0, -getLoaderHeight(), duration);
        loader.current.style.top = top + "px";
      }

      if (!final) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animating.current = true;
    setPath(initialCurve);
    timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, 500);

    return () => {
      animating.current = false;
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);

      setPath(initialCurve - 200);
      if (loader.current) {
        loader.current.style.top = -getLoaderHeight() + "px";
      }
    };
  }, []);

  const easeOutQuad = (time, start, end, duration) => {
    return -end * (time /= duration) * (time - 2) + start;
  };

  // Setea la curva SVG de acuerdo al alto de la pantalla
  const setPath = (curve) => {
    if (!path.current || !loader.current) return;
    const width = window.innerWidth;
    const height = getLoaderHeight();
    path.current.setAttributeNS(
      null,
      "d",
      `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height - curve} 0 ${height} L0 0`
    );
  };

  return (
    <div
      ref={loader}
      className="loader z-[100]"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        width: "100vw",
        height: getLoaderHeight() + "px",
        pointerEvents: "none",
        zIndex: 100,
      }}
    >
      <svg
        width={window.innerWidth}
        height={getLoaderHeight()}
        style={{ display: "block" }}
      >
        <path ref={path} fill="#fff" stroke="#fff" strokeWidth={1} />
      </svg>
    </div>
  );
};

export default LoaderAnimation;
