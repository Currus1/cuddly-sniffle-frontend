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
import UserAPI from "../../Services/UserServices/UserAPI";
import styles from "./Styles/ProfileStyle.module.css";
import { makeStyles } from "@material-ui/core/styles";

const licenseNumberRegExp = /^[A-Z]{3}\d{3}$/;
const driverLicenseRegExp = /^\d{8}$/;
const sedan = "SEDAN";
const suv = "SUV";
const ev = "EV";
const van = "VAN";

const useStyles = makeStyles({
  dialog: {
    backgroundColor: "#E8E5DA",
  },
});

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [licenseNumber, setLicenseNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("Sedan");
  const [driversLicense, setDriversLicense] = useState("");
  const classes = useStyles();

  const handleChange = (event) => {
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
    if (
      licenseNumber.match(licenseNumberRegExp) &&
      driversLicense.match(driverLicenseRegExp) &&
      vehicleType.length > 0
    ) {
      UserAPI.UpdateDriver(licenseNumber, driversLicense, vehicleType);
    }

    setOpen(false);
    window.location.reload();
  };

  const handleSubmit = () => {};

  return (
    <div>
      <button className={styles.driveButton} onClick={handleClickOpen}>
        Drive & Earn
      </button>
      <Dialog
        open={open}
        classes={{ root: classes.dialog }}
        onClose={handleClose}
      >
        <div style={{ backgroundColor: "#E8E5DA" }}>
          <DialogTitle style={{ color: "#7BC950", fontFamily: "montserrat" }}>
            Become a Commútify Driver
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              style={{ color: "black", fontFamily: "montserrat" }}
            >
              To become a driver you have to provide the following information.
            </DialogContentText>
            <ValidatorForm style={{ marginTop: "5%" }} onSubmit={handleSubmit}>
              <TextValidator
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "#7BC950",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#47682C",
                  },
                  "&:hover .Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#47682C !important",
                  },
                  ".Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#7BC950 !important",
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "black",
                    fontFamily: "montserrat",
                  },
                  shrink: true,
                }}
                InputProps={{
                  style: {
                    color: "black",
                    fontFamily: "montserrat",
                  },
                }}
                placeholder="e.g. 51241243"
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
                style={{
                  marginTop: "10%",
                  marginBottom: "10%",
                }}
              >
                <InputLabel
                  style={{ color: "black", fontFamily: "montserrat" }}
                  id="vehicleTypeLbl"
                >
                  Vehicle type
                </InputLabel>
                <Select
                  sx={{
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#7BC950",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#47682C",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#47682C",
                    },
                    ".MuiSvgIcon-root ": {
                      fill: "#47682C !important",
                    },
                  }}
                  InputProps={{
                    style: {
                      color: "black",
                      fontFamily: "montserrat",
                    },
                  }}
                  label="Vehicle Type"
                  labelId="vehicleTypeLbl"
                  fullWidth
                  value={vehicleType}
                  onChange={handleChange}
                >
                  <MenuItem className={styles.textColor} value={sedan}>
                    Sedan
                  </MenuItem>
                  <MenuItem className={styles.textColor} value={suv}>
                    SUV
                  </MenuItem>
                  <MenuItem className={styles.textColor} value={ev}>
                    EV
                  </MenuItem>
                  <MenuItem className={styles.textColor} value={van}>
                    VAN
                  </MenuItem>
                </Select>
              </FormControl>

              <TextValidator
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "#7BC950",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#47682C",
                  },
                  "&:hover .Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#47682C !important",
                  },
                  ".Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#7BC950 !important",
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "black",
                    fontFamily: "montserrat",
                  },
                  shrink: true,
                }}
                InputProps={{
                  style: {
                    color: "black",
                    fontFamily: "montserrat",
                  },
                }}
                fullWidth
                name="licenseNumber"
                type="text"
                id="LicenseNumber"
                placeholder="e.g. ABC123"
                label="Vehicle License Number"
                validators={["LicenseNumber"]}
                errorMessages={[
                  "Wrong format! Possible format may be: 'ABC123'",
                ]}
                onChange={(event) => setLicenseNumber(event.target.value)}
                value={licenseNumber}
              />
            </ValidatorForm>
          </DialogContent>
          <DialogActions>
            <button className={styles.driveButton} onClick={handleClose}>
              Cancel
            </button>
            <button className={styles.driveButton} onClick={handleJoin}>
              Join!
            </button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
