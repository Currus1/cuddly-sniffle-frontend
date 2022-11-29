import { Grid } from "@material-ui/core";
import React from "react";
import styles from "./Styles/FooterStyle.module.css";
import twitter from "../../Images/twitter.png";
import facebook from "../../Images/facebook.png";
import instagram from "../../Images/instagram.png";

const FooterComponent = () => (
  <Grid container className={styles.footerStyle}>
    <Grid item xs={12} md={3} className={styles.footerLogoStyle}>
      CURRUS
      <hr className={styles.footerHr} />
      <p>Stay In Touch!</p>
      <Grid container className={styles.footerLogoIConsStyle}>
        <Grid item xs={12} md={3}>
          <a href="#">
            <img src={instagram} className={styles.social_icons} alt="instagram"/>
          </a>
        </Grid>
        <Grid item xs={12} md={3}>
          <a href="#">
            <img src={facebook} className={styles.social_icons} alt="facebook" />
          </a>
        </Grid>
        <Grid item xs={12} md={3}>
          <a href="#">
            <img src={twitter} className={styles.social_icons} alt="twitter" />
          </a>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} md={3} className={styles.footerLicensesStyle}>
      <h3>Legal</h3>
      <a href="#" className={styles.footerTextColorGreen}>
        Terms Of Service
      </a>
      <br />
      <a href="#" className={styles.footerTextColorGreen}>
        Privacy Policy
      </a>
      <br />
      <a href="#" className={styles.footerTextColorGreen}>
        Cookies
      </a>
      <br />
      <a href="#" className={styles.footerTextColorGreen}>
        Security
      </a>
    </Grid>
    <Grid item xs={12} md={3} className={styles.footerCurrusFeatures}>
      <h3>Partner with us</h3>
      <a href="#" className={styles.footerTextColorYellow}>
        Sign up as a Driver
      </a>
      <br />
      <a href="#" className={styles.footerTextColorYellow}>
        Sign up as a User
      </a>
      <br />
      <a href="#" className={styles.footerTextColorYellow}>
        See ongoing trips
      </a>
      <br />
      <a href="#" className={styles.footerTextColorYellow}>
        See all trips
      </a>
      <br />
      <a href="#" className={styles.footerTextColorYellow}>
        Plan a trip
      </a>
      <br />
      <a href="#" className={styles.footerTextColorYellow}>
        Go to the map
      </a>
    </Grid>
    <Grid item xs={12} md={3} className={styles.footerCompanyStyle}>
      <h3>Company</h3>
      <a href="#" className={styles.footerTextColorRed}>
        About us
      </a>
      <br />
      <a href="#" className={styles.footerTextColorRed}>
        Careers
      </a>
      <br />
      <a href="#" className={styles.footerTextColorRed}>
        Green Plan
      </a>
      <br />
      <a href="#" className={styles.footerTextColorRed}>
        Press
      </a>
      <br />
      <a href="#" className={styles.footerTextColorRed}>
        Blog
      </a>
      <br />
      <a href="#" className={styles.footerTextColorRed}>
        Brand guidelines
      </a>
    </Grid>
    <Grid item xs={12} md={12} className={styles.footerCopyrightStyle}>
      <address>
        © 2022 CURRUS, Inc. |{" "}
        <a href="#" className={styles.footerTextColorYellow}>
          Leave a review
        </a>
      </address>
    </Grid>
  </Grid>
);

export default FooterComponent;
