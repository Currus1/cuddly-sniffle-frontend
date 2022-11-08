import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import DrawerComponent from "./DrawerComponent";
import "./Styles/HeaderStyle.css";

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  const ToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className="header-bgcolor">
          <DrawerComponent></DrawerComponent>
          <Typography color="inherit">CURRUS</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderComponent;
