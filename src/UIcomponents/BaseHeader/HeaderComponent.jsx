import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DrawerComponent from "./DrawerComponent";
import "./Styles/HeaderStyle.css";
import currus from "../../Images/currusLogo/Currus_3.png";



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
          <img src={currus} className="logo"></img>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderComponent;
