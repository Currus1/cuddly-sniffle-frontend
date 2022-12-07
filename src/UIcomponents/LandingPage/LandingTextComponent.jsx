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
              Be a Part of a <em>Sharing Community:</em> 
              <ul>
                <li>Sveikas</li>
              </ul>
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
