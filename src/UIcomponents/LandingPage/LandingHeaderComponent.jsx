import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import Toolbar from "@mui/material/Toolbar";
import headerStyles from "./Styles/LandingHeaderStyle.module.css";
import currus from "../../Images/logo/currus_long_1.png";
import importedHeaderStyles from "../BaseHeader/Styles/HeaderStyle.module.css";

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
    </div>
  );
};
export default HeaderComponent;
