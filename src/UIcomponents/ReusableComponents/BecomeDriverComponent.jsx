import styles from "./Styles/BecomeDriverComponentStyle.module.css";
import { Grid } from "@material-ui/core";

export default function BecomeDriverComponent() {
  return (
    <div className={styles.container}>
      <Grid container>
        <Grid item md={6} xs={12}>
          <div className={styles.image_container}></div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div>
            <p className={styles.text_container}>
              <h1>Earn With Your Routine!</h1> <br />
              💸 Jump in the train and earn by doing nothing extra! 💸 
              <div className={styles.button_container}>
                <button className={styles.learnMoreButton}>
                  Become a Driver!
                </button>
              </div>
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
