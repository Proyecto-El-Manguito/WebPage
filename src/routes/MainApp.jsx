import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import History from "../pages/History";
import Activities from "../pages/Activities";
import Restaurant from "../pages/Restaurant";
import Gallery from "../pages/Gallery";
import Location from "../pages/Location";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import Navbar from "../components/genericComponents/Navbar";
import ScrollToTopComponent from "../components/genericComponents/ScrollToTopComponent";
import { useThemeHook } from "../hooks/useTheme";
import { createTheme, ThemeProvider } from "@mui/material";
import LoaderAnimation from "./LoaderAnimation";
import PageTransition from "./PageTransition";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavigationDelayProvider } from "./NavigationDelayContext";
import { navTitles } from "../utils/navTitles";
import Lenis from "lenis";

export default function MainApp() {
  const theme = createTheme(useThemeHook());

  const location = useLocation();

   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <NavigationDelayProvider>
        <LoaderAnimation />
        <PageTransition color="#fff" />
        {/* {showLoader && <LoaderAnimation />} */}
        <Navbar />
        <ScrollToTopComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<History />} />
          <Route path="/actividades" element={<Activities />} />
          <Route path="/restaurante" element={<Restaurant />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/ubicacion" element={<Location />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/productos" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </NavigationDelayProvider>
    </ThemeProvider>
  );
}
