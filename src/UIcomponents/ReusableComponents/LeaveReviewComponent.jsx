import styles from "./Styles/LeaveReviewComponent.module.css";
import { Grid } from "@material-ui/core";

export default function LeaveReviewComponent() {
  return (
    <div className={styles.container}>
      <Grid container>
        <Grid item md={6} xs={12}>
          <div className={styles.image_container}></div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div>
            <div className={styles.text_container}>
              <h1>Help Us Improve!</h1> <br />
              Make our day better and tell us about the Commútify experience
              <div className={styles.button_container}>
                <button className={styles.learnMoreButton}>
                  Leave a Review
                </button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
