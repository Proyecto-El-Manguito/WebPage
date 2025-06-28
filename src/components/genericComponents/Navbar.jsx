import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Container,
  Stack,
  Paper,
  alpha,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import { navItems } from "../../utils/Const";
import { Link, useNavigate } from "react-router-dom";
import useScrollPosition from "../../hooks/useScrollPosition";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";
import { ShowAnimateComponent } from "./ShowAnimateComponent";
import { useNavigationDelay } from "../../routes/NavigationDelayContext";

const urlInsta = "https://www.instagram.com/el_manguito/";
const urlFacebook = "https://www.facebook.com/el_manguito";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scroll = useScrollPosition();
  const { navigateWithDelay, isTransitioning } = useNavigationDelay();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    // navigate(path);
    navigateWithDelay(path, 500);
    setMobileOpen(false); // Close the drawer after navigation
  };

  return (
    <Box>
      <AppBar
        component="nav"
        elevation={scroll ? 2 : 0} // Cambia la sombra según el scroll
        sx={{
          backgroundColor: scroll ? "#27544870" : "transparent", // fondo transparente
          backdropFilter: "blur(1px)", // 🔍 efecto blur
          WebkitBackdropFilter: "blur(1px)", // soporte para Safari
          color: "#fff", // texto blanco, puedes cambiarlo según tu fondo
          transition: "background-color 0.3s ease", // transición suave
        }}
      >
        <DesktopNav
          handleDrawerToggle={handleDrawerToggle}
          handleNavigation={handleNavigation}
        />
        <MobileNav
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          handleNavigation={handleNavigation}
        />
      </AppBar>
    </Box>
  );
}

const DesktopNav = ({ handleDrawerToggle, handleNavigation }) => {
  return (
    <Container>
      <Stack
        py={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            width: 40,
            height: 40,
            display: {
              xs: "flex",
              sm: "flex",
              md: "flex",
              lg: "none",
              xl: "none",
            },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={
              {
                // flexGrow: 1,
              }
            }
          >
            El manguito
          </Typography>
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            },
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item?.to}
              onClick={() => {
                handleNavigation(item?.to);
              }}
              sx={{ color: "#fff" }}
            >
              {item?.name}
            </Button>
          ))}
          {/*Icono de instagram*/}
          {/* <IconButton
            sx={{ marginLeft: 2 }}
            color="inherit"
            onClick={() => {
              window.open("https://www.instagram.com/el_manguito/", "_blank");
            }}
          >
            <InstagramIcon />
          </IconButton> */}
          {/*Icono de facebook*/}
          {/* <IconButton
            sx={{ marginLeft: 2 }}
            color="inherit"
            onClick={() => {
              window.open("https://www.facebook.com/el_manguito", "_blank");
            }}
          >
            <FacebookIcon />
          </IconButton> */}
        </Box>
      </Stack>
    </Container>
  );
};

const MobileNav = ({ mobileOpen, handleDrawerToggle, handleNavigation }) => {
  const theme = useTheme();
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    if (!mobileOpen) {
      setTimeout(() => {
        setShowBackground(false);
      }, 500); // Espera 1 segundo antes de mostrar el fondo
    } else {
      setShowBackground(true);
    }
  }, [mobileOpen]);
  return (
    <nav>
      <Drawer
        variant="temporary"
        open={showBackground}
        onClose={handleDrawerToggle}
        anchor="top"
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          },
          "& .MuiDrawer-paper": {
            width: "100%",
            boxSizing: "border-box",
          },
        }}
      >
        <Box
          bgcolor={"white.main"}
          sx={{
            width: "100%",
            minHeight: "100vh",
            height: "100%",
          }}
        >
          {/*Icono de la X */}
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            pt={2}
            pr={2}
          >
            <ShowAnimateComponent show={mobileOpen} delay={0.5}>
              <IconButton
                color="inherit"
                onClick={handleDrawerToggle}
                sx={{
                  bgcolor: alpha(theme.palette.third.main, 0.6),
                }}
              >
                <CloseIcon sx={{ color: "white.main" }} />
              </IconButton>
            </ShowAnimateComponent>
          </Stack>
          {/*Logo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "64px",
              height: "20svh",
            }}
          >
            <ShowAnimateComponent show={mobileOpen} delay={0.1}>
              <Typography variant="h6">El manguito</Typography>
            </ShowAnimateComponent>
          </Box>
          {/* Lista de navegación */}
          <Stack direction="row" justifyContent="center" alignItems="center">
            <List sx={{ width: "80%" }}>
              {navItems.map((item, i) => (
                <ListItem
                  key={item?.to}
                  disablePadding
                  sx={{
                    mb: 1,
                    borderRadius: 2,
                    backgroundColor: alpha(theme.palette.white.main, 0.6),
                  }}
                >
                  <ListItemButton
                    onClick={() => {
                      handleNavigation(item?.to);
                    }}
                  >
                    <ShowAnimateComponent
                      show={mobileOpen}
                      delay={i * 0.05 + 0.1}
                    >
                      <Stack spacing={2} direction={"row"} alignItems="center">
                        {item?.icon && (
                          <item.icon
                            sx={{
                              color: theme.palette.third.main,
                              mr: 1,
                              fontSize: 30,
                            }}
                          />
                        )}
                        <Typography fontWeight={500} variant="h5">
                          {item?.name}
                        </Typography>
                      </Stack>
                    </ShowAnimateComponent>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Stack>
          {/* Espacio para que el footer no se superponga al contenido */}
          <Box sx={{ flexGrow: 1 }} />
          <Divider sx={{ backgroundColor: theme.palette.white.main }} />
          {/*Icono de Facebook e instagram */}
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            py={1}
          >
            <ShowAnimateComponent show={mobileOpen} delay={0.5}>
              <IconButton
                color="inherit"
                onClick={() => {
                  window.open(urlInsta, "_blank");
                }}
              >
                <InstagramIcon sx={{ color: theme.palette.third.main }} />
              </IconButton>
            </ShowAnimateComponent>
            <ShowAnimateComponent show={mobileOpen} delay={0.5}>
              <IconButton
                color="inherit"
                onClick={() => {
                  window.open(urlFacebook, "_blank");
                }}
              >
                <FacebookIcon sx={{ color: theme.palette.third.main }} />
              </IconButton>
            </ShowAnimateComponent>
          </Stack>
        </Box>
      </Drawer>
    </nav>
  );
};

Navbar.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  handleNavigation: PropTypes.func.isRequired,
};

MobileNav.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  handleNavigation: PropTypes.func.isRequired,
};

DesktopNav.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  handleNavigation: PropTypes.func.isRequired,
};
