import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import styles from "./Styles/LandingHeaderStyle.module.css";
import logo from "../../Images/logo/logo.svg";
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ListItemIcon from "@mui/material/ListItemIcon";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseLogin = () => {
    handleClose();
    navigate("/login");
  };

  const handleCloseRegister = () => {
    handleClose();
    navigate("/register");
  };

  return (
    <Box>
      <div>
        <Toolbar className={styles.header_container}>
          {matches ? (
            <img
              src={logo}
              style={{ height: "80px", width: "150px" }}
              className={styles.logo}
            ></img>
          ) : (
            <img
              src={logo}
              style={{ marginLeft: "0vh", height: "80px", width: "150px" }}
              className={styles.logo}
            ></img>
          )}
          {matches ? (
            <div className={styles.buttonsContainer}>
              <Grid container direction={"column"} spacing={0.7}>
                <Grid item xs={6} md={6}>
                  <button
                    className={styles.loginButton}
                    onClick={() => navigate("/login")}
                  >
                    Log In
                  </button>
                </Grid>
                <Grid item xs={6} md={6}>
                  <button
                    className={styles.registerButton}
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </button>
                </Grid>
              </Grid>
            </div>
          ) : (
            <div className={styles.iconsContainer}>
              <IconButton
                aria-controls={open ? "menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                style={{ color: "black" }}
                aria-haspopup="true"
                size="large"
                edge="start"
                aria-label="menuButton"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "menuButton",
                }}
              >
                <MenuItem
                  onClick={handleCloseLogin}
                  style={{ color: "black", fontFamily: "montserrat" }}
                >
                  <ListItemIcon>
                    <LoginIcon style={{ color: "#47682C" }} />
                  </ListItemIcon>
                  Log In
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={handleCloseRegister}
                  style={{ color: "black", fontFamily: "montserrat" }}
                >
                  <ListItemIcon>
                    <HowToRegIcon style={{ color: "#47682C" }} />
                  </ListItemIcon>
                  Register
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </div>
    </Box>
  );
};
export default HeaderComponent;
