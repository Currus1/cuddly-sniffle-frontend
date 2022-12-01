import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, IconButton } from "@material-ui/core";
import Toolbar from "@mui/material/Toolbar";
import headerStyles from "./Styles/LandingHeaderStyle.module.css";
import currus from "../../Images/logo/currus_long_1.png";
import importedHeaderStyles from "../BaseHeader/Styles/HeaderStyle.module.css";
import styles from "./Styles/PageStyle.module.css";
import bannerStyles from "./Styles/BannerStyle.module.css";

const HeaderComponent = () => {
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div id="header">
      <AppBar className={headerStyles.appBar}>
        <Toolbar className={importedHeaderStyles.header_bgcolor}>
          <img src={currus} className={importedHeaderStyles.logo}></img>
          <div className={headerStyles.buttonDivs}>
            <button
              className={importedHeaderStyles.loginButton}
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
            <button
              className={importedHeaderStyles.registerButton}
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </Toolbar>
      </AppBar>
      <div className={styles.banner_container}>
        <div className={bannerStyles.banner_image}>
          <div className={bannerStyles.banner_text_container}>
            <div className={bannerStyles.banner_big_text}>
              <h1>Cu<span className={bannerStyles.red_text}>rr</span>us</h1>
            </div>
            <div className={bannerStyles.banner_small_text}>
              <h3>Share your ride with others!</h3>
            </div>
            <div className={bannerStyles.banner_button_container}>
              <button className={bannerStyles.banner_button}>Carpool Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderComponent;
