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
            <p>
              Carpooling is an effective transportation option because it allows
              individuals to split the costs of gas, tolls, and other expenses
              related to driving.
            </p>
          </div>
        </Grid>
        <Grid item md={4} xs={12} className={styles.item_container}>
          <div className={styles.item}>
            <div className={styles.environment_logo}></div>
            <p className={styles.item_header}>Save the environment</p>
            <p>
              Carpooling is an eco-friendly transportation option that helps to
              reduce the number of vehicles on the road, leading to fewer carbon
              emissions and a smaller overall environmental impact.
            </p>
          </div>
        </Grid>
        <Grid item md={4} xs={12} className={styles.item_container}>
          <div className={styles.item}>
            <div className={styles.people_logo}></div>
            <p className={styles.item_header}>Connect with people</p>
            <p>
              Carpooling makes commuting more efficient and enjoyable because it
              allows individuals to share the ride with others, reducing travel
              time and easing the burden of driving alone.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
