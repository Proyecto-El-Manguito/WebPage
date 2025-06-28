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

export default function MainApp() {
  const theme = createTheme(useThemeHook());

  const location = useLocation();


  return (
    <ThemeProvider theme={theme}>
      <NavigationDelayProvider>
        {/* <LoaderAnimation key={location.pathname} /> */}
        <PageTransition color="#fff" />
        {/* {showLoader && <LoaderAnimation />} */}
        <Navbar />
        <ScrollToTopComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </NavigationDelayProvider>
    </ThemeProvider>
  );
}
