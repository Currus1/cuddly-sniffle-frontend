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

const DriverComponent = () => {
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleTypes, setVehicleTypes] = useState([]);

  useEffect(() => {
    TripAPI.getVehicleTypeEnum().then((response) =>
      setVehicleTypes(response.data)
    );
    setVehicleType("Sedan"); // Initial value for select
  }, []);

  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
  };

  const avatarStyle = { backgroundColor: "#0099CC" };
  const marginTop = { marginTop: 15 };
  const bigMarginTop = { marginTop: 30 };
  const buttonStyle = {
    marginTop: 30,
    backgroundColor: "#0099CC",
    width: "100%",
  };

  return (
    <>
      <Grid>
        <Paper elevation={20} className="paperStyle">
          <Grid align="center">
            <Avatar style={avatarStyle}>
              {" "}
              <PersonAddIcon />{" "}
            </Avatar>
            <h2 className="headerStyle">Creating a driver</h2>
            <Typography variant="caption">
              Fill in all the fields below
            </Typography>
          </Grid>
          <form>
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
              id="date"
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
                id="demo-simple-select"
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
              id="VehicleType"
              placeholder="Enter your license number"
              style={marginTop}
            />
            <Button type="submit" variant="containeds" style={buttonStyle}>
              Add
            </Button>
          </form>
        </Paper>
      </Grid>
    </>
  );
};
export default DriverComponent;
