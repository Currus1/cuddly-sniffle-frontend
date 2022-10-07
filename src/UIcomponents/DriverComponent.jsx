import React, { useState, useEffect } from "react";
import "../bootstrap.css";
import "../App.css";
import "./styles/DriverStyle.css";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TripAPI from "../TripServices/TripAPI";
import DriverAPI from "../DriverServices/DriverAPI";
import { avatarStyle, iconStyle, marginTop, bigMarginTop, buttonStyle } from './styles/muiStyle.js'


const DriverComponent = () => {
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [driver] = useState([]);

  function saveClicked() {
    if (
      document.getElementById("Id").value !== "" &&
      document.getElementById("Name").value !== "" &&
      document.getElementById("Surname").value !== "" &&
      document.getElementById("Birthdate").value !== "" &&
      document.getElementById("Email").value !== "" &&
      document.getElementById("PhoneNumber").value !== "" &&
      document.getElementById("LicenseNumber").value !== ""
    ) {
      
      // ADDING DRIVER
      driver.Id = document.getElementById("Id").value;
      driver.Name = document.getElementById("Name").value;
      driver.Surname = document.getElementById("Surname").value;
      driver.Birthdate = document.getElementById("Birthdate").value;
      driver.Email = document.getElementById("Email").value;
      driver.VehicleType = vehicleType;
      driver.PhoneNumber = document.getElementById("PhoneNumber").value;
      driver.LicenseNumber = document.getElementById("LicenseNumber").value;

      console.log("User is added.");
      DriverAPI.addDriver(driver);
    } else {
      // ERROR
      alert("Not all fields were filled!");
    }
  }

  useEffect(() => {
    TripAPI.getVehicleTypeEnum().then((response) =>
      setVehicleTypes(response.data)
    );
    setVehicleType("Sedan"); // Initial value for select
  }, []);

  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
  };

  return (
    <>
      <Grid>
        <Paper elevation={20} className="paperStyle">
          <Grid align="center">
            <Avatar style={avatarStyle}>
              {" "}
              <PersonAddIcon style={iconStyle} />{" "}
            </Avatar>
            <h2 className="headerStyle">Creating a driver</h2>
            <Typography variant="caption">
              Fill in all the fields below
            </Typography>
          </Grid>
          <form>
          <TextField
              fullWidth
              label="Id"
              id="Id"
              placeholder="Driver's Id"
              style={marginTop}
            />
            <TextField
              fullWidth
              label="Name"
              id="Name"
              placeholder="Enter your name"
              style={marginTop}
            />
            <TextField
              fullWidth
              label="Surname"
              id="Surname"
              placeholder="Enter your surname"
              style={marginTop}
            />
            <TextField
              fullWidth
              id="Birthdate"
              label="Birthday"
              type="date"
              defaultValue="1999-12-25"
              style={bigMarginTop}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              fullWidth
              label="Email"
              id="Email"
              placeholder="Enter your email"
              style={marginTop}
            />
            <TextField
              fullWidth
              label="Phone number"
              id="PhoneNumber"
              placeholder="Enter your phone number"
              style={marginTop}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" style={bigMarginTop}>
                Vehicle Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="VehicleType"
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
            <TextField
              fullWidth
              label="License number"
              id="LicenseNumber"
              placeholder="Enter your license number"
              style={marginTop}
            />
            <Button
              onClick={saveClicked}
              variant="containeds"
              style={buttonStyle}
            >
              Add
            </Button>
          </form>
        </Paper>
      </Grid>
    </>
  );
};
export default DriverComponent;
