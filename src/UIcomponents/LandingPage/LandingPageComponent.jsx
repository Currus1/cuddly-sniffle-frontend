import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import React from "react";
import LandingHeaderComponent from "./LandingHeaderComponent";
import FooterComponent from "../BaseFooter/FooterComponent";
import LandingPageCardsComponent from "./LandingPageCardsComponent";
import SignUpComponent from "./SignupComponent";
import backgroundStyle from "../Styles/BackgroundStyle.module.css";

const HomePageComponent = () => {
  return (
    <div className={backgroundStyle.bg}>
      <CssBaseline />
      <LandingHeaderComponent />
      <LandingPageCardsComponent />
      <SignUpComponent />
      <FooterComponent />
    </div>
  );
};

export default HomePageComponent;
