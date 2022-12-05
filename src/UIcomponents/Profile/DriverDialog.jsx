import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const licenseNumberRegExp = /^[A-Z]{3}\d{3}$/;
const driverLicenseRegExp = /^\d{8}$/;

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [licenseNumber, setLicenseNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("Sedan");
  const [driversLicense, setDriversLicense] = useState("");

  const handleChange = (event) => {
    console.log("?");
    setVehicleType(event.target.value);
  };

  ValidatorForm.addValidationRule("DriversLicense", (value) => {
    if (value.match(driverLicenseRegExp)) {
      return true;
    }
    return false;
  });

  ValidatorForm.addValidationRule("LicenseNumber", (value) => {
    if (value.match(licenseNumberRegExp)) {
      return true;
    }
    return false;
  });

  const handleClickOpen = () => {
    setLicenseNumber("");
    setVehicleType("");
    setDriversLicense("");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleJoin = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log("submit will be soon");
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Drive & Earn
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Become A CURRUS Driver</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To become a driver you have to provide the following information.
          </DialogContentText>
          <ValidatorForm style={{ marginTop: "5%" }} onSubmit={handleSubmit}>
            <TextValidator
              InputLabelProps={{ shrink: true }}
              fullWidth
              name="licenseNumber"
              type="text"
              id="LicenseNumber"
              label="Drivers License Number"
              validators={["DriversLicense"]}
              errorMessages={[
                "Wrong format! Drivers License consist 8 symbols and only numbers.",
              ]}
              onChange={(event) => setDriversLicense(event.target.value)}
              value={driversLicense}
            />
            <FormControl
              fullWidth
              style={{ color: "black", marginTop: "10%", marginBottom: "10%" }}
            >
              <InputLabel id="vehicleTypeLbl">Vehicle Type</InputLabel>
              <Select
                label="Vehicle Type"
                labelId="vehicleTypeLbl"
                fullWidth
                value={vehicleType}
                onChange={handleChange}
              >
                <MenuItem value={0}>Sedan</MenuItem>
                <MenuItem value={1}>SUV</MenuItem>
                <MenuItem value={2}>EV</MenuItem>
                <MenuItem value={3}>VAN</MenuItem>
              </Select>
            </FormControl>

            <TextValidator
              InputLabelProps={{ shrink: true }}
              fullWidth
              name="licenseNumber"
              type="text"
              id="LicenseNumber"
              label="Vehicle License Number"
              validators={["LicenseNumber"]}
              errorMessages={["Wrong format! Possible format may be: 'ABC123'"]}
              onChange={(event) => setLicenseNumber(event.target.value)}
              value={licenseNumber}
            />
          </ValidatorForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleJoin}>Join!</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
