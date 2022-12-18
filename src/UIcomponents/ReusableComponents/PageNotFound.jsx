import styles from "./Styles/BecomeDriverComponentStyle.module.css";
import { Grid } from "@material-ui/core";

export default function TripHistoryCardComponent() {
  return (
    <div className={styles.profileContainer}>
      <Grid container>
        <Grid item xs={12}>
          <div className={styles.not_found_image_container}></div>
        </Grid>
      </Grid>
    </div>
  );
}
