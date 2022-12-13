import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DrawerComponent from "./DrawerComponent";
import styles from "./Styles/HeaderStyle.module.css";
import logo from "../../Images/logo/logo.svg";

const HeaderComponent = () => {
  return (
    <Box>
      <div>
        <Toolbar className={styles.header_container}>
          <DrawerComponent />
          <img src={logo}></img>
        </Toolbar>
      </div>
    </Box>
  );
};

export default HeaderComponent;
