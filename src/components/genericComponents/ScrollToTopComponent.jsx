import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopComponent() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
