import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import {
  driverButtonStyle,
  saveButtonStyle,
  textFieldStyle,
  marginTop,
} from "../styles/CustomLowButtonStyle";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function AddProfileTable({
  saveClicked,
  becomeADriverClicked,
  vehicleType,
  vehicleTypes,
  handleVehicleTypeChange,
}) {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <TextField
            style={textFieldStyle}
            //label="Name"
            id="Name"
            placeholder="Enter your name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            style={textFieldStyle}
            //label="Surname"
            id="Surname"
            placeholder="Enter your surname"
          />
        </Grid>
        <Grid item xs={12} md={6} align="left">
          <TextField
            style={textFieldStyle}
            id="Birthdate"
            //label="Birthday"
            type="date"
            defaultValue="1999-12-25"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} align="right">
          <TextField
            style={textFieldStyle}
            //label="Phone number"
            id="PhoneNumber"
            placeholder="Enter your phone number"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            style={marginTop}
            fullWidth
            //label="Email"
            id="Email"
            placeholder="Enter your email"
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={12} align="right">
          <Button fullWidth style={saveButtonStyle} onClick={saveClicked}>
            Save Changes!
          </Button>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" style={marginTop}>
              Vehicle Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="VehicleType"
              label="Vehicle type"
              value={vehicleType}
              onChange={handleVehicleTypeChange}
              style={marginTop}
            >
              {vehicleTypes.map((type) => (
                <MenuItem value={type}>{type}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            label="License number"
            id="LicenseNumber"
            placeholder="Enter your license number"
            style={marginTop}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button fullWidth style={driverButtonStyle} onClick={becomeADriverClicked}>
            Become a Driver!
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
