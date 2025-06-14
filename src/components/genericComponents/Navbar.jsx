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
import React, { useState } from "react";
import { navItems } from "../../utils/Const";
import { Link, useNavigate } from "react-router-dom";
import useScrollPosition from "../../hooks/useScrollPosition";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

const urlInsta = "https://www.instagram.com/el_manguito/";
const urlFacebook = "https://www.facebook.com/el_manguito";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scroll = useScrollPosition();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false); // Close the drawer after navigation
  };

  return (
    <Box>
      <AppBar
        component="nav"
        elevation={scroll ? 2 : 0} // Cambia la sombra según el scroll
        sx={{
          backgroundColor: scroll ? "third.main" : "transparent", // fondo transparente
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
            display: {
              xs: "block",
              sm: "block",
              md: "block",
              lg: "none",
              xl: "none",
            },
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
  return (
    <nav>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
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
            background: `linear-gradient(to Bottom, ${theme.palette.white.main} , ${theme.palette.third.main} 80%)`,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // importante: dirección vertical
            minHeight: "100vh", // o minHeight: '100vh' según tu caso
            height: "100%", // asegura que el Drawer ocupe toda la altura
          }}
        >
          {/*Contenedor nav header */}
          <Box bgcolor={"transparent"}>
            {/*Icono de la X */}
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              pt={2}
              pr={2}
            >
              <IconButton
                color="inherit"
                onClick={handleDrawerToggle}
                sx={{
                  bgcolor: alpha(theme.palette.third.main, 0.6),
                }}
              >
                <CloseIcon sx={{ color: "white.main" }} />
              </IconButton>
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
              <Typography variant="h6">El manguito</Typography>
            </Box>
          </Box>

          <Stack direction="row" justifyContent="center" alignItems="center">
            <List sx={{ width: "80%" }}>
              {navItems.map((item) => (
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
                    {item?.icon && (
                      <item.icon
                        sx={{ color: theme.palette.third.main, mr: 1 }}
                      />
                    )}
                    <ListItemText primary={item?.name} />
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
            <IconButton
              color="inherit"
              onClick={() => {
                window.open(urlInsta, "_blank");
              }}
            >
              <InstagramIcon sx={{ color: theme.palette.white.main }} />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => {
                window.open(urlFacebook, "_blank");
              }}
            >
              <FacebookIcon sx={{ color: theme.palette.white.main }} />
            </IconButton>
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
