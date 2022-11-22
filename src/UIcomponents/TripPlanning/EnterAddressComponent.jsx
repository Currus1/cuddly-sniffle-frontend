import { React } from "react";
import styles from "./Styles/PlanTripStyle.module.css";
import { Grid, Paper } from "@material-ui/core";
import GoogleAutoComplete from "../GoogleMapIntegration/GoogleAutoComplete";

export default function EnterAddressComponent({
  setLongitude,
  setLatitude,
  setCity,
  placeholder,
}) {
  return (
    <>
      <Paper elevation={20} className={styles.fullPaperStyle}>
        <Grid container className={styles.gridChildStyle}>
          <Grid item xs={12} md={8}>
            <GoogleAutoComplete
              className={styles.textFieldStyle}
              setLongitude={setLongitude}
              setLatitude={setLatitude}
              setCity={setCity}
              placeholder={placeholder}
            ></GoogleAutoComplete>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
