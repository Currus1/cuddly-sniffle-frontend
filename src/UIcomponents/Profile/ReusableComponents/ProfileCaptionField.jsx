import { Grid } from "@material-ui/core";
import styles from "../Styles/ProfileStyle.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";

export const ProfileCaptionField = ({ value }) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Grid item xs={12}>
      {matches ? (
        <h3 className={styles.primaryText}>{value}</h3>
      ) : (
        <h3 className={styles.primaryTextMobileMargin}>{value}</h3>
      )}
    </Grid>
  );
};
