import React from "react";
import { Grid } from "@material-ui/core";
import "../bootstrap.css";
import {
  headerStyle,
  logoStyle
} from "./styles/HeaderStyle.js"
import "./styles/DropdownStyle.css";
import "./styles/HeaderStyle.css";

const HeaderComponent = () => (
  <Grid  style={headerStyle}>
    <Grid item xs={1} md={3} style={logoStyle}>
      <img src="https://www.freeiconspng.com/thumbs/electricity-icon-png/electricity-icon--1.png" alt="" className="headerLogo" />
      <p className="headerLogoText">CURRUS</p>
    </Grid>
  </Grid>
);

export default HeaderComponent;
