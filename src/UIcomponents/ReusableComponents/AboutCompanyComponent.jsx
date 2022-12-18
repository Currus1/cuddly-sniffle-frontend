import styles from "./Styles/AboutCompanyComponentStyle.module.css";
import { Grid } from "@material-ui/core";

export default function AboutCompanyComponent() {
  return (
    <div className={styles.container}>
      <Grid container>
        <Grid item md={6} xs={12}>
          <div className={styles.text_container}>
            <h1 className={styles.header_text}>What Is Commútify?</h1> <br />
            Tired of sitting in traffic and feeling guilty about your
            carbon emissions? With our carpooling service, you can easily
            connect with other commuters in your area and share the ride to work
            or other destinations.
            <div className={styles.button_container}>
              <button className={styles.learnMoreButton}>Learn More!</button>
            </div>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div>
            <div className={styles.image_container}></div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
