// NavigationDelayContext.jsx
import React, { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navTitles } from "../utils/navTitles";

const NavigationDelayContext = createContext();

export function useNavigationDelay() {
  return useContext(NavigationDelayContext);
}

export function NavigationDelayProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isTransitioningAll, setIsTransitioningAll] = useState(false);
  const [pendingPath, setPendingPath] = useState(null);
  const [newPath, setNewPath] = useState("");

  const [newTitle, setNewTitle] = useState("");

  // Función que otros componentes pueden llamar para navegar con delay
  const navigateWithDelay = (path, delay = 500) => {
    if (location.pathname === path || isTransitioningAll) {
      return; // No haga nada si ya está en la ruta o se esta ejecutando la transicion
    } else {
      console.log(
        "[NAV] location.pathname",
        location.pathname,
        "path",
        path,
        "isTransitioningAll",
        isTransitioningAll
      );
    }

    const title = navTitles[path] || "";
    setNewTitle(title);

    console.log("path", path, "title", title);

    setIsTransitioning(true);
    setIsTransitioningAll(true);

    setPendingPath(path);
    setNewPath(path);

    setTimeout(() => {
      setIsTransitioning(false);
      setPendingPath(null);
      navigate(path);
      console.log("Moviendose a", path);
    }, delay);

    setTimeout(() => {
      setIsTransitioningAll(false);
      console.log("Cerrando animacion", path);
    }, delay + 1500);
  };

  return (
    <NavigationDelayContext.Provider
      value={{
        isTransitioning,
        navigateWithDelay,
        pendingPath,
        newTitle,
        newPath
      }}
    >
      {children}
    </NavigationDelayContext.Provider>
  );
}
