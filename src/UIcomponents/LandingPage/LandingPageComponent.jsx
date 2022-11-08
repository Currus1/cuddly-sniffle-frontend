import { makeStyles } from "@material-ui/styles";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import React, { useState, useEffect } from "react";
import backgroundImage from "../../Images/landing_background.jpg";
import LandingHeaderComponent from "./LandingHeaderComponent";
import FooterComponent from "../BaseFooter/FooterComponent";
import LandingPageCardsComponent from "./LandingPageCardsComponent";
import SignUpComponent from "./SignupComponent";

const HomePageComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <LandingHeaderComponent />
      <LandingPageCardsComponent />
      <SignUpComponent />
      <FooterComponent />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    height: "100%",
  },
}));

export default HomePageComponent;
