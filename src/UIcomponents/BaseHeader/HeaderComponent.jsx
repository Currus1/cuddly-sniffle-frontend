import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DrawerComponent from "./DrawerComponent";
import styles from "./Styles/HeaderStyle.module.css";
import currus from "../../Images/logo/currus_logo_2.png";


const HeaderComponent = () => {
  return (
    <Box>
      <div>
        <Toolbar className={styles.header_container}>
          <DrawerComponent />
          <img src={currus} className={styles.logo}></img>
        </Toolbar>
      </div>
    </Box>
  );
};

export default HeaderComponent;
