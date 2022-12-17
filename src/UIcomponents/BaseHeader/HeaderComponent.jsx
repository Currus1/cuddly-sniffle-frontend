import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DrawerComponent from "./DrawerComponent";
import styles from "./Styles/HeaderStyle.module.css";
import logo from "../../Images/logo/logo.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box>
      <div>
        <Toolbar className={styles.header_container}>
          {matches ? (
            <img
              style={{ marginLeft: "4vh", width: "150px", height: "80px" }}
              src={logo}
              className={styles.logo}
            ></img>
          ) : (
            <img
              src={logo}
              style={{ marginLeft: "0vh", width: "150px", height: "80px" }}
              className={styles.logo}
            ></img>
          )}
          <div
            style={{
              alignItems: "right",
              marginLeft: "auto",
              marginRight: "2vh",
            }}
          >
            <IconButton
              style={{
                color: "#47682C",
              }}
              size="large"
              edge="start"
              aria-label="Profile"
              onClick={() => navigate("/profile")}
            >
              <PersonIcon />
            </IconButton>
          </div>

          <div
            style={{
              alignItems: "right",
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
