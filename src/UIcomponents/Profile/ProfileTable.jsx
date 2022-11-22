import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import styles from "./Styles/ProfileStyle.module.css";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function AddProfileTable({
  saveClicked,
  becomeADriverClicked,
  vehicleType,
  name,
  surname,
  birthdate,
  phoneNumber,
  email,
  vehicleTypes,
  handleVehicleTypeChange,
}) {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <TextField
            className={styles.textFieldStyle}
            id="Name"
            value={name}
            placeholder="Enter your name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            className={styles.textFieldStyle}
            id="Surname"
            value={surname}
            placeholder="Enter your surname"
          />
        </Grid>
        <Grid item xs={12} md={6} align="left">
          <TextField
            className={styles.textFieldStyle}
            id="Birthdate"
            type="date"
            defaultValue="1999-12-25"
            value={birthdate}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} align="right">
          <TextField
            className={styles.textFieldStyle}
            id="PhoneNumber"
            value={phoneNumber}
            placeholder="Enter your phone number"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            className={styles.marginTop}
            fullWidth
            id="Email"
            value={email}
            placeholder="Enter your email"
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={12} align="right">
          <Button
            fullWidth
            className={styles.saveButtonStyle}
            onClick={saveClicked}
          >
            Save Changes!
          </Button>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              className={styles.marginTop}
            >
              Vehicle Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="VehicleType"
              label="Vehicle type"
              value={vehicleType}
              onChange={handleVehicleTypeChange}
              className={styles.marginTop}
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
            className={styles.marginTop}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button
            fullWidth
            className={styles.driverButtonStyle}
            onClick={becomeADriverClicked}
          >
            Become a Driver!
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
