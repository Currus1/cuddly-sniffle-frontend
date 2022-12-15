import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DrawerComponent from "./DrawerComponent";
import styles from "./Styles/HeaderStyle.module.css";
import logo from "../../Images/logo/logo.svg";
import mobileLogo from "../../Images/logo/mobileLogo.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

const HeaderComponent = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box>
      <div>
        <Toolbar className={styles.header_container}>
          {matches ? (
            <img src={logo} className={styles.logo}></img>
          ) : (
            <img
              src={mobileLogo}
              style={{ marginLeft: "-1vh" }}
              className={styles.logo}
            ></img>
          )}
          <div
            style={{
              alignItems: "right",
              marginLeft: "auto",
            }}
          >
            <DrawerComponent />
          </div>
        </Toolbar>
      </div>
    </Box>
  );
};

export default HeaderComponent;
