import styles from "./Styles/InfoCardsComponentStyle.module.css";
import { Grid } from "@material-ui/core";

export default function InfoCardsComponent() {
  return (
    <div className={styles.container}>
      <Grid container>
        <Grid item md={4} xs={12} className={styles.item_container}>
          <div className={styles.item}>
            <div className={styles.money_logo}></div>
            <p className={styles.item_header}>Cheap way of travelling</p>
            <p>this will be the paragraph about saving money</p>
          </div>
        </Grid>
        <Grid item md={4} xs={12} className={styles.item_container}>
          <div className={styles.item}>
            <div className={styles.environment_logo}></div>
            <p className={styles.item_header}>Save the environment</p>
            <p>this will be the paragraph about saving the environment</p>
          </div>
        </Grid>
        <Grid item md={4} xs={12} className={styles.item_container}>
          <div className={styles.item}>
            <div className={styles.people_logo}></div>
            <p className={styles.item_header}>Connect with people</p>
            <p>this will be the paragraph about connecting with people</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}