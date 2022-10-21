import React from "react";
import { Grid } from "@material-ui/core";
import "../bootstrap.css";
import {
  headerStyle,
  logoStyle,
  rightColumnStyle,
  textButtonStyle,
  containedButtonStyle,
} from "./styles/HeaderStyle.js";
import { iconStyle } from "./styles/muiStyle.js";
import "./styles/HeaderStyle.css";
import { Button } from "@material-ui/core";
import Person2Icon from "@mui/icons-material/Person2";

const HeaderComponent = () => (
  <Grid container style={headerStyle}>
    <Grid item xs={12} md={6} style={logoStyle}>
      <img
        src="https://www.freeiconspng.com/thumbs/electricity-icon-png/electricity-icon--1.png"
        alt=""
        className="headerLogo"
      />
      <p className="headerLogoText">CURRUS</p>
    </Grid>
    <Grid item xs={12} md={6} style={rightColumnStyle}>
      <Button variant="contained" style={containedButtonStyle} href="\register">
        Register!
      </Button>
      <Button variant="text" style={textButtonStyle} href="\profile">
        <Person2Icon style={iconStyle}></Person2Icon>
      </Button>
    </Grid>
  </Grid>
);

export default HeaderComponent;
