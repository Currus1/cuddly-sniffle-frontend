import React, { useEffect, useState } from "react";
import "../bootstrap.css";
import "../App.css";
import UserAPI from "../UserServices/UserAPI.js";
import DriverAPI from "../DriverServices/DriverAPI.js";
import InputLabel from "@mui/material/InputLabel";
import TripAPI from "../TripServices/TripAPI";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Divider,
} from "@material-ui/core";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CommuteIcon from "@mui/icons-material/Commute";
import AddTaskIcon from "@mui/icons-material/AddTask";
import FormControl from "@mui/material/FormControl";
import {
  avatarStyle,
  iconStyle,
  marginTop,
  bigMarginTop,
  buttonStyle,
  paperStyle,
  headerStyle,
  dividerStyle,
  widePaperStyle,
} from "./styles/muiStyle.js";

const PlanningComponent = () => {
  const [data, setData] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [driver, setDriver] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleTypes, setVehicleTypes] = useState([]);

  useEffect(() => {
    UserAPI.GetAllUsers().then((response) => setUsers(response.data));
    DriverAPI.GetAllDrivers().then((response) => setDrivers(response.data));
    TripAPI.getVehicleTypeEnum().then((response) =>
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
    if (
      document.getElementById("ROid").value != "" &&
      document.getElementById("ROuser").value != "" &&
      document.getElementById("ROdriver").value != "" &&
      document.getElementById("ROstartingPoint").value != "" &&
      document.getElementById("ROdestination").value != "" &&
      document.getElementById("ROseats").value != "" &&
      document.getElementById("ROhours").value != "" &&
      document.getElementById("ROminutes").value != "" &&
      document.getElementById("ROdistance").value != ""
    ) {
      return true;
    }
    return false;
  }

  function SaveValues() {
    data.Id = document.getElementById("ROid").value;
    data.DriverId = document.getElementById("ROdriver").value;
    data.UserId = document.getElementById("ROuser").value;
    data.StartingPoint = document.getElementById("ROstartingPoint").value;
    data.Destination = document.getElementById("ROdestination").value;
    data.Seats = document.getElementById("ROseats").value;
    data.Hours = document.getElementById("ROhours").value;
    data.Minutes = document.getElementById("ROminutes").value;
    data.VehicleType = vehicleType;
    data.Distance = document.getElementById("ROdistance").value;
  }

  function AddClicked() {
    if (ValidateFields()) {
      SaveValues();
      if (TripAPI.addTrip(data)) alert("Trip is added");
      else alert("Server failed to add your trip");
      console.log("clear");
    } else {
      alert("Please make sure to enter all the fields");
    }
  }

  return (
    <>
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
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" style={bigMarginTop}>
              User
            </InputLabel>
            <Select
              value={user}
              label="User:"
              onChange={handleUserChange}
              style={bigMarginTop}
            >
              {users.map((user) => (
                <MenuItem value={user.Id}>{user.Id}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" style={bigMarginTop}>
              Vehicle Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              value={vehicleType}
              label="Vehicle type"
              onChange={handleVehicleTypeChange}
              style={bigMarginTop}
            >
              {vehicleTypes.map((type) => (
                <MenuItem value={type}>{type}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" style={bigMarginTop}>
              Driver
            </InputLabel>
            <Select
              value={driver}
              label="Driver:"
              onChange={handleDriverChange}
              style={bigMarginTop}
            >
              {drivers.map((driver) => (
                <MenuItem value={driver.id}>{driver.id}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Starting point"
            id="startingPoint"
            placeholder="Enter the starting point"
            style={marginTop}
          />
          <TextField
            fullWidth
            label="Destination point"
            id="destination"
            placeholder="Enter the destination point"
            style={marginTop}
          />
          <TextField
            fullWidth
            label="Distance"
            id="distance"
            placeholder="Distance"
            style={marginTop}
          />
          <TextField
            fullWidth
            label="Seat count"
            id="seats"
            placeholder="Enter the amount of seats"
            style={marginTop}
          />
          <TextField
            fullWidth
            label="Hours"
            id="hours"
            placeholder="Enter the amount of seats"
            style={marginTop}
          />
          <TextField
            fullWidth
            label="Minutes"
            id="minutes"
            placeholder="Enter the amount of minutes"
            style={marginTop}
          />
          <Button onClick={SaveClicked} variant="contained" style={buttonStyle}>
            Add
          </Button>
        </Paper>
        <Paper elevation={20} style={widePaperStyle}>
          <Grid align="left">
            <Avatar style={avatarStyle}>
              {" "}
              <AddTaskIcon style={iconStyle} />{" "}
            </Avatar>
            <h2 style={headerStyle}>Saving a trip</h2>
            <Typography variant="caption">Check trip details below</Typography>
            <Divider style={dividerStyle} />
          </Grid>
          <TextField
            fullWidth
            id="ROid"
            placeholder="..."
            style={marginTop}
            disabled
          />
          <TextField
            fullWidth
            id="ROuser"
            placeholder="..."
            style={marginTop}
            disabled
          />
          <TextField
            fullWidth
            id="ROvehicleType"
            placeholder="..."
            style={marginTop}
            disabled
          />
          <TextField
            fullWidth
            id="ROdriver"
            placeholder="..."
            style={marginTop}
            disabled
          />
          <TextField
            fullWidth
            id="ROstartingPoint"
            placeholder="..."
            style={marginTop}
            disabled
          />
          <TextField
            fullWidth
            id="ROdestination"
            placeholder="..."
            style={marginTop}
            disabled
          />
          <TextField
            fullWidth
            id="ROdistance"
            placeholder="..."
            style={marginTop}
            disabled
          />
          <TextField
            fullWidth
            id="ROseats"
            placeholder="..."
            style={marginTop}
            disabled
          />
          <TextField
            fullWidth
            id="ROhours"
            placeholder="..."
            style={marginTop}
            disabled
          />
          <TextField
            fullWidth
            id="ROminutes"
            placeholder="..."
            style={marginTop}
            disabled
          />
          <Button onClick={AddClicked} variant="contained" style={buttonStyle}>
            Save
          </Button>
        </Paper>
      </Grid>
    </>
  );
};

export default PlanningComponent;
