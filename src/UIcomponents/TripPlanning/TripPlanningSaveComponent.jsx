import { React } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import styles from "./Styles/PlanTripStyle.module.css";

export default function TripPlanningSaveComponent({ saveClicked, errorText }) {
  return (
    <>
      <Grid container className={styles.floatingGridStyle}>
        <Paper elevation={20} className={styles.fixedPaperStyle}>
          <Grid container className={styles.padding}>
            <Grid item xs={12} md={1}>
              <Avatar className={styles.avatarStyle}>
                {" "}
                <ModeOfTravelIcon className={styles.iconStyle} />{" "}
              </Avatar>
            </Grid>
            <Grid item xs={12} md={11}>
              <h3 className={styles.h3}>Plan a New Trip!</h3>
            </Grid>
            <Typography variant="caption">
              Fill in all the fields below
            </Typography>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={10} className={styles.tripSettingsItem}>
              <TextField
                fullWidth
                id="seats"
                placeholder="Enter the amount of seats"
                label="number of seats"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={10} className={styles.tripSettingsItem}>
              <TextField
                fullWidth
                id="hours"
                placeholder="Enter an hour when the trip starts"
                label="Hours"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={10} className={styles.tripSettingsItem}>
              <TextField
                fullWidth
                id="minutes"
                placeholder="Enter minutes when the trip starts"
                label="Minutes"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={10} className={styles.tripSettingsItem}>
              <Button
                className={styles.buttonStyle}
                onClick={saveClicked}
                fullWidth
              >
                Save The Trip!
              </Button>
              <h5 className={styles.errorStyle}>{errorText}</h5>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
