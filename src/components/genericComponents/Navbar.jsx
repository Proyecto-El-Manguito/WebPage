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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { navItems } from "../../utils/Const";
import { useNavigate } from "react-router-dom";
import useScrollPosition from "../../hooks/useScrollPosition";

const drawerWidth = 240;

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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item?.to} disablePadding>
            <ListItemButton
              onClick={() => {
                handleNavigation(item?.to);
              }}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item?.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar
        component="nav"
        elevation={scroll ? 2 : 0} // Cambia la sombra según el scroll
        sx={{
          backgroundColor: scroll ? "third.main" : "transparent", // fondo transparente
          backdropFilter: "blur(8px)", // 🔍 efecto blur
          WebkitBackdropFilter: "blur(8px)", // soporte para Safari
          color: "#fff", // texto blanco, puedes cambiarlo según tu fondo
          transition: "background-color 0.3s ease", // transición suave
        }}
      >
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
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
              }}
            >
              El manguito
            </Typography>
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
            </Box>
          </Stack>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
