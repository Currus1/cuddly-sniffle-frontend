import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Styles/PageStyle.module.css";
import bannerStyles from "./Styles/BannerStyle.module.css";

const LandingComponent = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.banner_container}>
      <div className={bannerStyles.banner_image}>
        <div className={bannerStyles.black}></div>
        <div className={bannerStyles.image}></div>
        <div className={bannerStyles.banner_text_container}>
          <div className={bannerStyles.banner_big_text}>
            <h1>
              Commútify
            </h1>
          </div>
          <div className={bannerStyles.banner_small_text}>
            <h3>Share your ride with others!</h3>
          </div>
          <div className={bannerStyles.banner_button_container}>
            <button className={bannerStyles.banner_button} onClick={() => navigate("/register")}>Carpool Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingComponent;