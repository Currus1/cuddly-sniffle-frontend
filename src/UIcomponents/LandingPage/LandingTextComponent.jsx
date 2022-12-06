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
              <em>
                <strong>Commutify</strong>
              </em>{" "}
              is a service that allows people to share rides to work, school, or
              other destinations. It is a great way to save money, reduce
              emissions, and relieve stress on the roads. Our company helps to
              match up would-be carpoolers and schedule rides. We provide an
              easy to use online platform that helps people find and book rides
              with other people in their area. We also provide customer service
              and support to ensure a safe and enjoyable experience for
              everyone.
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
