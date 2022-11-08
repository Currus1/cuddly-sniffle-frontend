import {React, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import HeaderComponent from "../BaseHeader/HeaderComponent";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import {
  smallGridStyle,
  fullGridStyle,
  h3HeaderStyle,
  fixedPaperStyle,
  tripSettingsItem,
  buttonStyle,
  floatingGridStyle,
} from "../Styles/PlanTripStyle";
import TextFieldPaperDesign from "../ReusableComponents/TextFieldPaperDesign";
import { avatarStyle, iconStyle, padding, errorStyle } from "../Styles/muiStyle.js";
import TripAPI from "../../TripServices/TripAPI.js";

const PlanningComponent = () => {
  const [errorText, setErrorText] = useState("");
  const [trip] = useState([]);
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [startingPoint, setStartingPoint] = useState();
  const [destination, setDestination] = useState();

  function saveClicked() {
    if (
      document.getElementById("seats").value != "" &&
      document.getElementById("hours").value != "" &&
      document.getElementById("minutes").value != "" &&
      longitude &&
      latitude
    ) {
      
      trip.Latitude = latitude;
      trip.Longitude = longitude;
      trip.StartingPoint = startingPoint;
      trip.Destination = destination;
      trip.Seats = document.getElementById("seats").value;
      trip.Hours = document.getElementById("hours").value;
      trip.Minutes = document.getElementById("minutes").value;
      trip.Distance = 100;
      trip.VehicleType = 2;
      trip.TripStatus = "Planned";
      trip.EstimatedTripPrice = 12;
      
      TripAPI.addTrip(trip);
    
      setErrorText("Trip added!");
    } else {
      setErrorText("error with given data");
    }
  }

  return (
    <>
      <HeaderComponent />
      <Grid container style={floatingGridStyle}>
        <Grid item xs={12} md={4} style={smallGridStyle}>
          <TextFieldPaperDesign
            textFieldID={"startingPoint"}
            textFieldPlaceHolder={"Enter the starting point"}
            buttonText={"Save"}
            setLongitude={setLongitude}
            setLatitude={setLatitude}
            setCity = {setStartingPoint}
          />
        </Grid>
      </Grid>

      <Grid container style={floatingGridStyle}>
        <Grid item xs={12} md={4} style={smallGridStyle}>
          <TextFieldPaperDesign
            textFieldID={"destinationPoint"}
            textFieldPlaceHolder={"Enter the destination point"}
            buttonText={"Save"}
            setLongitude={setLongitude}
            setLatitude={setLatitude}
            setCity = {setDestination}
          />
        </Grid>
      </Grid>

      <Grid container style={floatingGridStyle}>
        <Grid item xs={12} md={4} style={fullGridStyle}>
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
      </Grid>
    </>
  );
};

export default PlanningComponent;
