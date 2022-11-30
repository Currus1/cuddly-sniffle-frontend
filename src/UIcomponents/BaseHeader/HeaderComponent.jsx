import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DrawerComponent from "./DrawerComponent";
import styles from "./Styles/HeaderStyle.module.css";
import currus from "../../Images/logo/currus_long_1.png";

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  const ToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={styles.header_bgcolor}>
          <DrawerComponent></DrawerComponent>
          <img src={currus} className={styles.logo}></img>
          <div className={styles.buttonDivs}>
            <button className={styles.loginButton}>Log In</button>
            <button className={styles.registerButton}>Register</button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderComponent;
