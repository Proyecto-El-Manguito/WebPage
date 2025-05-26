import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import MainApp from "./routes/MainApp";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <MainApp />
  </HashRouter>
);
