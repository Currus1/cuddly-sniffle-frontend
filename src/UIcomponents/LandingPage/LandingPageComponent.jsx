import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import React, { useEffect } from "react";
import LandingHeaderComponent from "./LandingHeaderComponent";
import LandingBannerComponent from "./LandingBannerComponent";
import FooterComponent from "../BaseFooter/FooterComponent";
import SignUpComponent from "./SignupComponent";
import { useNavigate } from "react-router-dom";
import AuthService from "../../Services/AuthServices/auth.service";
import LandingTextComponent from "./LandingTextComponent";
import BecomeDriverComponent from "../ReusableComponents/BecomeDriverComponent";
import InfoCardsComponent from "../ReusableComponents/InfoCardsComponent";

const HomePageComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (AuthService.getCurrentUser() != null) {
      navigate("/home");
    }
  }, []);

  return (
    <div>
      <CssBaseline />
      <LandingHeaderComponent />
      <LandingBannerComponent />
      <LandingTextComponent />
      <InfoCardsComponent />
      <BecomeDriverComponent />
      <SignUpComponent />
      <FooterComponent />
    </div>
  );
};

export default HomePageComponent;
