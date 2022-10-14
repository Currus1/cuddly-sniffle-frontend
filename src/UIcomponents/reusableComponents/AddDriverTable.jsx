import React from "react";
import {
    marginTop,
    bigMarginTop,
    buttonStyle,
  } from "../styles/muiStyle.js";
  import {
    TextField,
    Button,
  } from "@material-ui/core";
  import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function AddDriverDataComponents({SaveClicked, vehicleType, handleVehicleTypeChange, vehicleTypes}) {
  return (
    <>
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
              onClick={SaveClicked}
              variant="contained"
              style={buttonStyle}
            >
              Add
            </Button>
    </>
  );
}
