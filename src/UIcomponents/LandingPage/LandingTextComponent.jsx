import { Grid } from "@material-ui/core";
import styles from "./Styles/PageStyle.module.css";
import componentStyles from "./Styles/LandingTextComponent.module.css";

const LandingImageAndTextComponent = () => {
  return (
    <div className={styles.img_text_container}>
      <div className={componentStyles.text_container}>
        <Grid container>
          <Grid item xs={12} md={5}>
            <p className={componentStyles.paragraph}>
              <p className={componentStyles.biggerText}>
                Be a Part of a <em>Sharing Community:</em>
              </p>
              💰 Save money and time on your daily commute 💰 <br/>
              ⛽ Reduce your carbon footprint and help the environment ⛽ <br/>
              💨 Fast and easy setup 💨 <br/>
              🚗 Join an active community of carpoolers 🚗 <br/>
              🚵 Track your carpooling activity and miles 🚵
            </p>
          </Grid>
          <Grid item xs={12} md={7}>
            <div className={componentStyles.image}></div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default LandingImageAndTextComponent;
