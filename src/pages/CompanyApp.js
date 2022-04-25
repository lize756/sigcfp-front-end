import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import RequestIcon from "@mui/icons-material/PostAdd";
import GraduatedIcon from "@mui/icons-material/School";
import ContactsIcon from "@mui/icons-material/Groups";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import {
  Box,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  MenuItem,
  Menu,
  Avatar,
  Tooltip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CardProfile from "../layout/CardProfile";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router";

const drawerWidth = 270;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),

    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const CompanyApp = () => {
  const theme = useTheme();
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/**====================AppBar========================= */}
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              PORTAL DE SOLICITUDES DE LA UNIVERSIDAD ICESI
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Opciones">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  key="Home"
                  onClick={() => {
                    navigate("/company/home");
                  }}
                >
                  <Typography textAlign="center">Inicio</Typography>
                </MenuItem>
                <MenuItem
                  key="Perfil"
                  onClick={() => {
                    navigate("/company/profile");
                  }}
                >
                  <Typography textAlign="center">Perfil</Typography>
                </MenuItem>
                <Divider />
                <MenuItem key="Cerrar Sesion" onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Cerrar Sesión</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        {/**========================================Drawer======================================== */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Box
            sx={{
              mx: "auto",
              p: 1,
            }}
          >
            <CardProfile />
            <Toolbar />
          </Box>

          <List>
            <ListItem
              button
              key="Home"
              onClick={() => {
                navigate("/company/home");
              }}
            >
              <ListItemIcon>
                <HomeIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem
              button
              key="Request"
              onClick={() => {
                navigate("/company/request");
              }}
            >
              <ListItemIcon>
                <RequestIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Solicitudes Practicantes" />
            </ListItem>

            <ListItem button key="Graduated">
              <ListItemIcon>
                <GraduatedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Perfiles Egresados" />
            </ListItem>

            <ListItem
              button
              key="Contacts"
              onClick={() => {
                navigate("/company/users");
              }}
            >
              <ListItemIcon>
                <ContactsIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Contactos " />
            </ListItem>

            <ListItem button key="Profile">
              <ListItemIcon>
                <PersonPinIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Perfil " />
            </ListItem>
          </List>
        </Drawer>

        {/**====================Contents========================= */}
        <Main open={open}>
          <DrawerHeader />

          <Outlet />
        </Main>
      </Box>
    </div>
  );
};

export default CompanyApp;
