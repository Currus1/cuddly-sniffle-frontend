import React, { useState, useEffect } from "react";
import "../Styles/PageStyle.css";
import { Grid, Paper, Typography } from "@material-ui/core";
import { shadowPropButton, arrowProp } from "./Styles/AttributeStyle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const HomePageCardsComponent = () => {
  return (
    <div className="half-page-container">
      <div>
        <h1>Ready to carpool?</h1>
        <a href="/register" style={shadowPropButton}>
          Sign up now
        </a>
        <br />
        <TrendingUpIcon style={arrowProp}></TrendingUpIcon>
      </div>
    </div>
  );
};

export default HomePageCardsComponent;
