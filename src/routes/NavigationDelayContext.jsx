// NavigationDelayContext.jsx
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { navTitles } from "../utils/navTitles";

const NavigationDelayContext = createContext();

export function useNavigationDelay() {
  return useContext(NavigationDelayContext);
}

export function NavigationDelayProvider({ children }) {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingPath, setPendingPath] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  // Función que otros componentes pueden llamar para navegar con delay
  const navigateWithDelay = (path, delay = 500) => {
    const title = navTitles[path] || "";
    setNewTitle(title);

    console.log("path", path, "title", title);

    setIsTransitioning(true);
    setPendingPath(path);
    setTimeout(() => {
      setIsTransitioning(false);
      setPendingPath(null);
      navigate(path);
    }, delay);
  };

  return (
    <NavigationDelayContext.Provider
      value={{
        isTransitioning,
        navigateWithDelay,
        pendingPath,
        newTitle,
      }}
    >
      {children}
    </NavigationDelayContext.Provider>
  );
}
