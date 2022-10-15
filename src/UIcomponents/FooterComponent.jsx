import { Grid } from "@material-ui/core";
import React from "react";
import {
  footerStyle,
  footerLogoStyle,
  footerLicensesStyle,
  footerCurrusFeatures,
  footerCompanyStyle,
  footerLogoIConsStyle,
} from "./styles/muiFooterStyle.js";
import "./styles/FooterStyle.css";

const FooterComponent = () => (
  <Grid container style={footerStyle}>
    <Grid item xs={12} md={3} style={footerLogoStyle}>
      CURRUS
      <hr />
      <Grid container style={footerLogoIConsStyle}>
        <Grid item xs={12} md={3}>
          <a href="#">
            <img
              src="https://www.transparentpng.com/thumb/logo-instagram/mrG45j-instagram-black-logo-free-download.png"
              alt=""
            />
          </a>
        </Grid>
        <Grid item xs={12} md={3}>
          <a href="#">
            <img
              src="https://pnggrid.com/wp-content/uploads/2021/04/Facebook-Logo-Transparent-Background-Black-1024x1024.png"
              alt=""
            />
          </a>
        </Grid>
        <Grid item xs={12} md={3}>
          <a href="#">
            <img
              src="https://assets.stickpng.com/images/5a2fe479cc45e43754640849.png"
              alt=""
            />
          </a>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} md={3} style={footerLicensesStyle}>
      <h3>Legal</h3>
      <a href="#">Terms Of Service</a> <br />
      <a href="#">Privacy Policy</a> <br />
      <a href="#">Cookies</a> <br />
      <a href="#">Security</a>
    </Grid>
    <Grid item xs={12} md={3} style={footerCurrusFeatures}>
      <h3>Partner with CURRUS</h3>
      <a href="#">Sign up as a Driver</a> <br />
      <a href="#">Sign up as a User</a> <br />
      <a href="#">See ongoing trips</a> <br />
      <a href="#">See all trips</a> <br />
      <a href="#">Plan a trip</a> <br />
      <a href="#">Go to the map</a>
    </Grid>
    <Grid item xs={12} md={3} style={footerCompanyStyle}>
      <h3>Currus</h3>
      <a href="#">About us</a> <br />
      <a href="#">Careers</a> <br />
      <a href="#">Green Plan</a> <br />
      <a href="#">Press</a> <br />
      <a href="#">Blog</a> <br />
      <a href="#">Brand guidelines</a>
    </Grid>
  </Grid>
);

export default FooterComponent;
