import React from "react";
import styles from "./Styles/PageStyle.module.css";
import bannerStyles from "./Styles/BannerStyle.module.css";

const LandingPageBannerComponent = () => {
  return (
    <div className={styles.banner_container}>
      <div className={bannerStyles.banner_image}> 
      <div className={bannerStyles.black}></div>
        <div className={bannerStyles.image}></div>
        <div className={bannerStyles.banner_big_text}>
          <h1>
          <span className={bannerStyles.red_text}>Fast</span> and <span className={bannerStyles.red_text}>Affordable</span> way to <span className={bannerStyles.red_text}>Ride</span> in 2023
          </h1>
        </div>
        <div className={bannerStyles.banner_action_container}>
          <h3 className={bannerStyles.banner_link}>⬇ Explore The Trips ⬇</h3>
        </div>
      </div>
    </div>
  );
};
export default LandingPageBannerComponent;
