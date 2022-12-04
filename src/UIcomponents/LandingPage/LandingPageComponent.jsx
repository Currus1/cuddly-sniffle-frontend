import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import React, { useEffect } from "react";
import LandingHeaderComponent from "./LandingHeaderComponent";
import LandingBannerComponent from "./LandingBannerComponent";
import FooterComponent from "../BaseFooter/FooterComponent";
import LandingPageCardsComponent from "./LandingPageCardsComponent";
import SignUpComponent from "./SignupComponent";
import backgroundStyle from "../Styles/BackgroundStyle.module.css";
import { useNavigate } from "react-router-dom";
import AuthService from "../../Services/AuthServices/auth.service";

const HomePageComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (AuthService.getCurrentUser() != null) {
      navigate("/home");
    }
  }, []);

  return (
    <div className={backgroundStyle.bg}>
      <CssBaseline />
      <LandingHeaderComponent />
      <LandingBannerComponent />
      <LandingPageCardsComponent />
      <SignUpComponent />
      <FooterComponent />
    </div>
  );
};

export default HomePageComponent;
