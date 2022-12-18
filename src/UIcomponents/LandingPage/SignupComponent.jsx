import React from "react";
import styles from "./Styles/PageStyle.module.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttributeStyle from "./Styles/AttributeStyle.module.css";

const HomePageCardsComponent = () => {
  return (
    <div className={styles.half_page_container}>
      <div>
        <h1 className={AttributeStyle.header_text}>Ready to carpool?</h1>
        <a href="/register" className={AttributeStyle.button}>
          Sign up now
        </a>
        <br />
        <TrendingUpIcon className={AttributeStyle.arrowProp}></TrendingUpIcon>
      </div>
    </div>
  );
};

export default HomePageCardsComponent;
