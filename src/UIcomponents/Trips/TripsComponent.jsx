import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
//import backgroundImage from "../../Images/landing_background.jpg";
import HeaderComponent from "../BaseHeader/HeaderComponent";
import FooterComponent from "../BaseFooter/FooterComponent";
import TripListComponent from "./TripListComponent";
import backgroundStyle from "../Styles/BackgroundStyle.module.css";
import AuthService from "../../Services/AuthServices/auth.service";
import { useNavigate } from "react-router-dom";

const TripsComponent = () => {
  const navigate = useNavigate("");

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
      navigate("/login");
    }
  }, []);
  return (
    <div className={backgroundStyle.bg}>
      <HeaderComponent />
      <TripListComponent />
      <FooterComponent />
    </div>
  );
};

export default TripsComponent;
