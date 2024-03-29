import { Grid } from "@material-ui/core";
import React from "react";
import styles from "./Styles/FooterStyle.module.css";
import twitter from "../../Images/twitter.png";
import facebook from "../../Images/facebook.png";
import instagram from "../../Images/instagram.png";

const FooterComponent = () => (
  <Grid container className={styles.footerStyle}>
    <Grid item xs={12} sm={12} md={8} className={styles.footerLogoStyle}>
      Commútify
      <hr className={styles.footerHr} />
      <p className={styles.footerText}>
        <b>Stay In Touch!</b>
      </p>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item xs={3} md={1}>
          <a href="#">
            <img
              src={instagram}
              className={styles.social_icons}
              alt="instagram"
            />
          </a>
        </Grid>
        <Grid item xs={3} md={1}>
          <a href="#">
            <img
              src={facebook}
              className={styles.social_icons}
              alt="facebook"
            />
          </a>
        </Grid>
        <Grid item xs={3} md={1}>
          <a href="#">
            <img src={twitter} className={styles.social_icons} alt="twitter" />
          </a>
        </Grid>
      </Grid>
    </Grid>
    <Grid container justifyContent="center" style={{ marginTop: "5vh" }}>
      <Grid item xs={12} sm={4} md={3} className={styles.footerSectionStyle}>
        <h3 style={{ fontSize: "1.4rem" }}>Legal</h3>
        <a href="#" className={styles.footerTextColor}>
          Terms Of Service
        </a>
        <br />
        <a href="#" className={styles.footerTextColor}>
          Privacy Policy
        </a>
        <br />
        <a href="#" className={styles.footerTextColor}>
          Cookies
        </a>
        <br />
        <a href="#" className={styles.footerTextColor}>
          Security
        </a>
      </Grid>
      <Grid item xs={12} sm={4} md={3} className={styles.footerSectionStyle}>
        <h3 style={{ fontSize: "1.4rem" }}>Partner with us</h3>
        <a href="#" className={styles.footerTextColor}>
          Sign up
        </a>
        <br />
        <a href="#" className={styles.footerTextColor}>
          Earn as a driver
        </a>
        <br />
        <a href="#" className={styles.footerTextColor}>
          Commmunities
        </a>
        <br />
        <a href="#" className={styles.footerTextColor}>
          Franchise
        </a>
        <br />
        <a href="#" className={styles.footerTextColor}>
          Influencers
        </a>
      </Grid>
      <Grid item xs={12} sm={4} md={3} className={styles.footerSectionStyle}>
        <h3 style={{ fontSize: "1.4rem" }}>Company</h3>
        <a href="#" className={styles.footerTextColor}>
          About us
        </a>
        <br />
        <a href="#" className={styles.footerTextColor}>
          Careers
        </a>
        <br />
        <a href="#" className={styles.footerTextColor}>
          Green Plan
        </a>
        <br />
        <a href="#" className={styles.footerTextColor}>
          Press
        </a>
        <br />
        <a href="#" className={styles.footerTextColor}>
          Blog
        </a>
        <br />
        <a href="#" className={styles.footerTextColor}>
          Brand guidelines
        </a>
      </Grid>
    </Grid>

    <Grid
      style={{ marginBottom: "5vh" }}
      item
      xs={12}
      className={styles.footerCopyrightStyle}
    >
      <address>
        © 2022 Commútify, Inc. |{" "}
        <a href="#" className={styles.footerTextColor}>
          Leave a review
        </a>
      </address>
    </Grid>
  </Grid>
);

export default FooterComponent;
