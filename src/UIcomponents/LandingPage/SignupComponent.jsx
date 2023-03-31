import React from "react";
import styles from "./Styles/PageStyle.module.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttributeStyle from "./Styles/AttributeStyle.module.css";
import { useNavigate } from "react-router-dom";

const HomePageCardsComponent = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.half_page_container}>
      <div>
        <h1 className={AttributeStyle.header_text}>Ready to carpool?</h1>
        <button
          onClick={() => navigate("/register")}
          className={AttributeStyle.button}
        >
          Sign up now
        </button>
        <br />
        <TrendingUpIcon className={AttributeStyle.arrowProp}></TrendingUpIcon>
      </div>
    </div>
  );
};

export default HomePageCardsComponent;
