import styles from "./Styles/PageStyle.module.css";
import announcementStyle from "./Styles/AnnouncementBarStyle.module.css";

const LandingAnnouncementBar = () => {
  return (
    <div className={styles.announcement_bar_container}>
      <div className={announcementStyle.container}>
        <div className={announcementStyle.announcement_text}>
          <p className={announcementStyle.announcement}>
            🚀 Join us today and help us make carpooling the best way to travel! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};
export default LandingAnnouncementBar;
