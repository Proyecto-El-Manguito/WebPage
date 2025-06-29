import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Duraciones (ajustables)
const FADE_DURATION = 300; // ms
const ANIMATION_DURATION = 600; // ms
const DELAY_BEFORE_ANIMATE = 200; // ms

const LoaderAnimation = () => {
  const loader = useRef(null);
  const path = useRef(null);
  const location = useLocation();

  const initialCurve = 200;
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  // Función para alto dinámico
  const getLoaderHeight = () => window.innerHeight + 200;

  // Reproduce animación cada vez que cambia la ruta
  useEffect(() => {
    let animationFrameId;
    let timeoutId;
    let fadeTimeoutId;
    let animating = true;
    let start = undefined;

    setVisible(true); // Montar
    setFade(true); // Inicia Fade In

    // Inicia la animación después del fade
    timeoutId = setTimeout(() => {
      animate();
    }, DELAY_BEFORE_ANIMATE);

    function animate(timestamp) {
      if (!animating) return;
      if (start === undefined && timestamp !== undefined) start = timestamp;
      const elapsed = timestamp && start ? timestamp - start : 0;

      let newCurve;
      let final = false;
      if (elapsed >= ANIMATION_DURATION) {
        newCurve = initialCurve - 200;
        final = true;
      } else {
        newCurve = easeOutQuad(elapsed, initialCurve, -200, ANIMATION_DURATION);
      }

      setPath(newCurve);

      if (loader.current) {
        const top = final
          ? -getLoaderHeight()
          : easeOutQuad(elapsed, 0, -getLoaderHeight(), ANIMATION_DURATION);
        loader.current.style.top = top + "px";
      }

      if (!final) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Fade out después de animar la curva
        fadeTimeoutId = setTimeout(() => setFade(false), 200); // Comienza Fade Out
        // Remueve del DOM después del fade
        setTimeout(() => setVisible(false), FADE_DURATION + 200);
      }
    }

    setPath(initialCurve);
    if (loader.current) {
      loader.current.style.top = "0px";
    }

    return () => {
      animating = false;
      clearTimeout(timeoutId);
      clearTimeout(fadeTimeoutId);
      cancelAnimationFrame(animationFrameId);
      setFade(false);
      setTimeout(() => setVisible(false), FADE_DURATION); // Asegura desmontaje
    };
    // eslint-disable-next-line
  }, [location.pathname]);

  const easeOutQuad = (time, start, end, duration) => {
    return -end * (time /= duration) * (time - 2) + start;
  };

  const setPath = (curve) => {
    if (!path.current || !loader.current) return;
    const width = window.innerWidth;
    const height = getLoaderHeight();
    path.current.setAttributeNS(
      null,
      "d",
      `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${
        height - curve
      } 0 ${height} L0 0`
    );
  };

  // CSS para Fade
  const loaderStyle = {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    width: "100vw",
    height: getLoaderHeight() + "px",
    pointerEvents: "none",
    zIndex: 100,
    opacity: fade ? 1 : 0,
    transition: `opacity ${FADE_DURATION}ms cubic-bezier(.4,0,.2,1)`,
    willChange: "opacity",
  };

  // Solo renderiza si visible
  if (!visible) return null;

  return (
    <div ref={loader} className="loader z-[100]" style={loaderStyle}>
      <svg
        width={window.innerWidth}
        height={getLoaderHeight()}
        style={{ display: "block" }}
      >
        <path ref={path} fill="#fff" stroke="#fff" strokeWidth={1} />
      </svg>

      {/* Texto centrado y animado */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: getLoaderHeight() + "px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#333",
            // textShadow: "0 4px 16px #fff, 0 1px 10px #aaa",
            letterSpacing: 2,
            opacity: fade ? 1 : 0,
            transition: `opacity ${
              FADE_DURATION + 100
            }ms cubic-bezier(.4,0,.2,1)`,
            userSelect: "none",
          }}
        >
          El manguito
        </span>
      </div>
    </div>
  );
};

export default LoaderAnimation;
