import React from "react";
import { Grid } from "@material-ui/core";
import {
  headerStyle,
  logoStyle,
  rightColumnStyle,
  iconButtonStyle,
  containedButtonStyle,
  headerLogo,
  headerLogoText,
} from "./Styles/HeaderStyle.js";
import { iconStyle } from "../Styles/muiStyle.js";
import { Button } from "@material-ui/core";
import Person2Icon from "@mui/icons-material/Person2";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

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
      <Button style={iconButtonStyle} href="\trips\history">
        <WorkHistoryIcon style={iconStyle}></WorkHistoryIcon>
      </Button>
      <Button variant="text" style={iconButtonStyle} href="\profile">
        <Person2Icon style={iconStyle}></Person2Icon>
      </Button>
    </Grid>
  </Grid>
);

export default HeaderComponent;
