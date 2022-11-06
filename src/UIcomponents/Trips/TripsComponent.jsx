import React from "react";
import { makeStyles } from "@material-ui/styles";
//import backgroundImage from "../../Images/landing_background.jpg";
import HeaderComponent from "../BaseHeader/HeaderComponent";
import FooterComponent from "../BaseFooter/FooterComponent";
import TripListComponent from "./TripListComponent";
import { backgroundStyle } from "../Styles/BackgroundStyle";

const TripsComponent = () => {
  return (
    <div style={backgroundStyle}>
      <HeaderComponent />
      <TripListComponent />
      <FooterComponent />
    </div>
  );
};

export default TripsComponent;
