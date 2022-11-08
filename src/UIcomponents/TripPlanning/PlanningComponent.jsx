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
<<<<<<< HEAD:src/UIcomponents/TrIpPlanning/PlanningComponent.jsx
  floatingGridStyle,
} from "../Styles/PlanTripStyle";
import TextFieldPaperDesign from "../ReusableComponents/TextFieldPaperDesign";
import { avatarStyle, iconStyle, padding, errorStyle } from "../Styles/muiStyle.js";
import TripAPI from "../../TripServices/TripAPI.js";
=======
  paperStyle,
  headerStyle,
  dividerStyle,
  widePaperStyle,
} from "../Styles/muiStyle.js";
import FooterComponent from "../BaseFooter/FooterComponent.jsx";
import HeaderComponent from "../BaseHeader/HeaderComponent.jsx";
import { backgroundStyle } from "../Styles/BackgroundStyle.js";
>>>>>>> 9999c6c4e5ac9ba9560adaf0a93bfc5fec300e7c:src/UIcomponents/TripPlanning/PlanningComponent.jsx

const PlanningComponent = () => {
  const [errorText, setErrorText] = useState("");
  const [trip] = useState([]);
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [startingPoint, setStartingPoint] = useState();
  const [destination, setDestination] = useState();

<<<<<<< HEAD:src/UIcomponents/TrIpPlanning/PlanningComponent.jsx
  function saveClicked() {
=======
  useEffect(() => {
    UserAPI.GetAllUsers().then((response) => setUsers(response.data));
    TripAPI.getVehicleTypes().then((response) =>
      setVehicleTypes(response.data)
    );
    setVehicleType("Sedan"); // Initial value for select
  }, []);

  const handleDriverChange = (event) => {
    setDriver(event.target.value);
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
  };

  function SaveClicked() {
    document.getElementById("ROid").value = document.getElementById("id").value;
    document.getElementById("ROuser").value = user;
    document.getElementById("ROvehicleType").value = vehicleType;
    document.getElementById("ROdriver").value = driver;
    document.getElementById("ROstartingPoint").value =
      document.getElementById("startingPoint").value;
    document.getElementById("ROdestination").value =
      document.getElementById("destination").value;
    document.getElementById("ROseats").value =
      document.getElementById("seats").value;
    document.getElementById("ROhours").value =
      document.getElementById("hours").value;
    document.getElementById("ROminutes").value =
      document.getElementById("minutes").value;
    document.getElementById("ROdistance").value =
      document.getElementById("distance").value;
  }

  function ValidateFields() {
>>>>>>> 9999c6c4e5ac9ba9560adaf0a93bfc5fec300e7c:src/UIcomponents/TripPlanning/PlanningComponent.jsx
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
<<<<<<< HEAD:src/UIcomponents/TrIpPlanning/PlanningComponent.jsx
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
=======
    <div style={backgroundStyle}>
      <HeaderComponent />
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="left">
            <Avatar style={avatarStyle}>
              {" "}
              <CommuteIcon style={iconStyle} />{" "}
            </Avatar>
            <h2 style={headerStyle}>Adding a trip</h2>
            <Typography variant="caption">
              Fill in all the fields below
            </Typography>
            <Divider style={dividerStyle} />
          </Grid>
          <TextField
            fullWidth
            label="Trip Nr."
            id="id"
            placeholder="Trip number"
            style={marginTop}
>>>>>>> 9999c6c4e5ac9ba9560adaf0a93bfc5fec300e7c:src/UIcomponents/TripPlanning/PlanningComponent.jsx
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
      <FooterComponent />
    </div>
  );
};

export default PlanningComponent;
