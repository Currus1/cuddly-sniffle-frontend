import styles from "./Styles/AnnouncementBarStyle.module.css";

export default function AnnouncementBar({ text }) {
  return (
    <div className={styles.announcement_bar_container}>
      <div className={styles.container}>
        <div className={styles.announcement_text}>
          <p className={styles.announcement}>{text}</p>
        </div>
      </div>
    </div>
  );
}
