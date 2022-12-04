import styles from "./Styles/PageStyle.module.css";
import announcementStyle from "./Styles/AnnouncementBarStyle.module.css";

const LandingAnnouncementBar = () => {
  return (
    <div className={styles.announcement_bar_container}>
      <div className={announcementStyle.container}>
        <div className={announcementStyle.announcement_text}>
          <p className={announcementStyle.announcement}>
            🚀 Think of some kind of a text here 🚀
          </p>
        </div>
      </div>
    </div>
  );
};
export default LandingAnnouncementBar;
