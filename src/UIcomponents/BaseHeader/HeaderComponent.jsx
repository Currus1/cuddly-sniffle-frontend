import React from "react";
import { Grid } from "@material-ui/core";
import {
  headerStyle,
  logoStyle,
  rightColumnStyle,
  textButtonStyle,
  containedButtonStyle,
  headerLogo,
  headerLogoText,
} from "./Styles/HeaderStyle.js";
import { iconStyle } from "../Styles/muiStyle.js";
import { Button } from "@material-ui/core";
import Person2Icon from "@mui/icons-material/Person2";

const HeaderComponent = () => (
  <Grid container style={headerStyle}>
    <Grid item xs={12} md={6} style={logoStyle}>
      <img
        src="https://www.freeiconspng.com/thumbs/electricity-icon-png/electricity-icon--1.png"
        alt=""
        style={headerLogo}
      />
      <p style={headerLogoText}>CURRUS</p>
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
