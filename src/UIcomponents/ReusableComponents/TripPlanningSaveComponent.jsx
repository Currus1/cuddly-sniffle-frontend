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
import {
  h3HeaderStyle,
  fixedPaperStyle,
  tripSettingsItem,
  buttonStyle,
  floatingGridStyle,
} from "../Styles/PlanTripStyle";
import {
  avatarStyle,
  iconStyle,
  padding,
  errorStyle,
} from "../Styles/muiStyle.js";

export default function TripPlanningSaveComponent({saveClicked, errorText}) {
  return (
    <>
      <Grid container style={floatingGridStyle}>
          <Paper elevation={20} style={fixedPaperStyle}>
            <Grid container style={padding}>
              <Grid item xs={12} md={1}>
                <Avatar style={avatarStyle}>
                  {" "}
                  <ModeOfTravelIcon style={iconStyle} />{" "}
                </Avatar>
              </Grid>
              <Grid item xs={12} md={11}>
                <h3 style={h3HeaderStyle}>Plan a New Trip!</h3>
              </Grid>
              <Typography variant="caption">
                Fill in all the fields below
              </Typography>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={10} style={tripSettingsItem}>
                <TextField
                  fullWidth
                  id="seats"
                  placeholder="Enter the amount of seats"
                  label="number of seats"
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={10} style={tripSettingsItem}>
                <TextField
                  fullWidth
                  id="hours"
                  placeholder="Enter amount of hours that the trip will take"
                  label="amount of hours"
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={10} style={tripSettingsItem}>
                <TextField
                  fullWidth
                  id="minutes"
                  placeholder="Enter amount of minutes that the trip will take"
                  label="amount of minutes"
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={10} style={tripSettingsItem}>
                <Button style={buttonStyle} onClick={saveClicked} fullWidth>
                  Save The Trip!
                </Button>
                <h5 style={errorStyle}>{errorText}</h5>
              </Grid>
            </Grid>
          </Paper>
      </Grid>
    </>
  );
}
