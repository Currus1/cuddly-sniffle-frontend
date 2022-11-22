import React from "react";
import styles from "./Styles/PageStyle.module.css";
import { shadowPropButton, arrowProp } from "./Styles/AttributeStyle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const HomePageCardsComponent = () => {
  return (
    <div className={styles.half_page_container}>
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
