import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
//import backgroundImage from "../../Images/landing_background.jpg";
import HeaderComponent from "../BaseHeader/HeaderComponent";
import FooterComponent from "../BaseFooter/FooterComponent";
import TripListComponent from "./TripListComponent";
import backgroundStyle from "../Styles/BackgroundStyle.module.css";
import { useNavigate } from "react-router-dom";
import { useUserValidation } from "../../CustomHooks/useUserValidation";

const TripsComponent = () => {
  const navigate = useNavigate("");

  var isValid = useUserValidation();

  useEffect(() => {
    if (!isValid) {
      navigate("/");
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
