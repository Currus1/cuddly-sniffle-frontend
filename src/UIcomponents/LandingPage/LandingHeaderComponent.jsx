import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import styles from "./Styles/LandingHeaderStyle.module.css";
import logo from "../../Images/logo/logo.svg";
import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";

const HeaderComponent = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <div>
        <Toolbar className={styles.header_container}>
          <img src={logo} className={styles.logo}></img>
          <div
            direction={"column"}
            spacing={1}
            className={styles.buttons_container}
          >
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
        </Toolbar>
      </div>
    </Box>
  );
};
export default HeaderComponent;
