import { Grid } from "@material-ui/core";
import React from "react";
import {
  footerStyle,
  footerLogoStyle,
  footerLicensesStyle,
  footerCurrusFeatures,
  footerCompanyStyle,
  footerLogoIConsStyle,
  footerCopyrightStyle,
  footerTextColorYellow,
  footerTextColorRed,
  footerTextColorGreen,
  footerHr,
} from "./Styles/FooterStyle.js";
import "./Styles/FooterStyle.css";
import "../LandingPage/Styles/PageStyle.css";
import twitter from "../../Images/twitter.png";
import facebook from "../../Images/facebook.png";
import instagram from "../../Images/instagram.png";

const FooterComponent = () => (
  <div className="page-container">
    <Grid container style={footerStyle}>
      <Grid item xs={12} md={3} style={footerLogoStyle}>
        CURRUS
        <hr style={footerHr} />
        <p>Stay In Touch!</p>
        <Grid container style={footerLogoIConsStyle}>
          <Grid item xs={12} md={3}>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
          </Grid>
          <Grid item xs={12} md={3}>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
          </Grid>
          <Grid item xs={12} md={3}>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={3} style={footerLicensesStyle}>
        <h3>Legal</h3>
        <a href="#" style={footerTextColorGreen}>
          Terms Of Service
        </a>
        <br />
        <a href="#" style={footerTextColorGreen}>
          Privacy Policy
        </a>
        <br />
        <a href="#" style={footerTextColorGreen}>
          Cookies
        </a>
        <br />
        <a href="#" style={footerTextColorGreen}>
          Security
        </a>
      </Grid>
      <Grid item xs={12} md={3} style={footerCurrusFeatures}>
        <h3>Partner with us</h3>
        <a href="#" style={footerTextColorYellow}>
          Sign up as a Driver
        </a>
        <br />
        <a href="#" style={footerTextColorYellow}>
          Sign up as a User
        </a>
        <br />
        <a href="#" style={footerTextColorYellow}>
          See ongoing trips
        </a>
        <br />
        <a href="#" style={footerTextColorYellow}>
          See all trips
        </a>
        <br />
        <a href="#" style={footerTextColorYellow}>
          Plan a trip
        </a>
        <br />
        <a href="#" style={footerTextColorYellow}>
          Go to the map
        </a>
      </Grid>
      <Grid item xs={12} md={3} style={footerCompanyStyle}>
        <h3>Company</h3>
        <a href="#" style={footerTextColorRed}>
          About us
        </a>
        <br />
        <a href="#" style={footerTextColorRed}>
          Careers
        </a>
        <br />
        <a href="#" style={footerTextColorRed}>
          Green Plan
        </a>
        <br />
        <a href="#" style={footerTextColorRed}>
          Press
        </a>
        <br />
        <a href="#" style={footerTextColorRed}>
          Blog
        </a>
        <br />
        <a href="#" style={footerTextColorRed}>
          Brand guidelines
        </a>
      </Grid>
      <Grid item xs={12} md={12} style={footerCopyrightStyle}>
        <address>
          © 2022 CURRUS, Inc. |{" "}
          <a href="#" style={footerTextColorYellow}>
            Leave a review
          </a>
        </address>
      </Grid>
    </Grid>
  </div>
);

export default FooterComponent;
