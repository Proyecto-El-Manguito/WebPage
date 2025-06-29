import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { navItems } from "../../utils/Const";
import { CustomContainer } from "../../components/titleComponents/CustomContainer";
import { useNavigationDelay } from "../../routes/NavigationDelayContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { navigateWithDelay } = useNavigationDelay();

  const handleNavigation = (to) => {
    // e.preventDefault();
    navigateWithDelay(to, 1100);
  };

  return (
    <div
      className="relative h-[600px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[600px] w-full bg-white text-black">
        <footer className="bg-gray-800 text-white px-6 sm:px-12 py-12">
          <CustomContainer className="z-[2]">
            {/* Columna: Navegación */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
              <div>
                <h2 className="text-sm font-semibold mb-4 uppercase">
                  Navegación
                </h2>
                <ul className="space-y-2 text-sm">
                  {navItems.slice(0, 4).map((item) => (
                    <li key={item.name}>
                      {/* <a
                        href={item.to}
                        onClick={(e) => handleClick(e, item.to)}
                        className="hover:underline"
                      >
                        {item.name}
                      </a> */}
                      {/* <Link
                        to={item?.to}
                        onClick={(e) => {
                          e.preventDefault();
                          navigateWithDelay(item.to, 1100);
                        }}
                        className="hover:underline"
                      >
                        
                      </Link> */}
                      <span
                        className="hover:underline cursor-pointer"
                        tabIndex={0}
                        role="link"
                        onClick={() => navigateWithDelay(item.to, 1100)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            navigateWithDelay(item.to, 1100);
                          }
                        }}
                      >
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Columna 3: Más Enlaces */}
              <div>
                <h2 className="text-sm font-semibold mb-4 uppercase">Más</h2>
                <ul className="space-y-2 text-sm">
                  {navItems.slice(4).map((item) => (
                    <li key={item.name}>
                      <span
                        className="hover:underline cursor-pointer"
                        tabIndex={0}
                        role="link"
                        onClick={() => navigateWithDelay(item.to, 1100)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            navigateWithDelay(item.to, 1100);
                          }
                        }}
                      >
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Columna: Título */}
            <div className="md:col-span-2 mt-28 pb-4">
              <h1 className="font-mona text-4xl sm:text-5xl lg:text-6xl font-title font-medium leading-none">
                El Manguito
              </h1>
            </div>

            {/* Redes Sociales + Copyright */}
            <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/acoapaserderl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="hover:text-pink-500 transition" />
                </a>
                <a
                  href="https://www.facebook.com/people/Acoapaser-de-RL/100093246420673/?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="hover:text-blue-500 transition" />
                </a>
                <a
                  href="https://twitter.com/ACOPASERdeRL?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="hover:text-blue-400 transition" />
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-4 md:mt-0">
                © {new Date().getFullYear()} ACOPASER de R.L. Todos los derechos
                reservados.
              </p>
            </div>
          </CustomContainer>

          {/* Circulitos caminantes */}
          <div className="z-[-100]">
            <div className="absolute top-1/2 right-0 w-[800px] h-[800px] rounded-full bg-[#40587a30] flex items-center justify-center">
              <div className="w-[600px] h-[600px] rounded-full bg-[#2d3e5650]"></div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
