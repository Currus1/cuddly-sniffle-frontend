import React from "react";
import styles from "./Styles/PageStyle.module.css";
import bannerStyles from "./Styles/BannerStyle.module.css";

const LandingComponent = () => {
  return (
    <div className={styles.banner_container}>
      <div className={bannerStyles.banner_image}>
        <div className={bannerStyles.banner_text_container}>
          <div className={bannerStyles.banner_big_text}>
            <h1>
              Cu<span className={bannerStyles.red_text}>rr</span>us
            </h1>
          </div>
          <div className={bannerStyles.banner_small_text}>
            <h3>Share your ride with others!</h3>
          </div>
          <div className={bannerStyles.banner_button_container}>
            <button className={bannerStyles.banner_button}>Carpool Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingComponent;
