import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import UserAPI from "../../Services/UserServices/UserAPI.js";
import { useNavigate } from "react-router-dom";
import { TextField } from "@material-ui/core";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DriverDialog from "./DriverDialog";
import { useUserValidation } from "../../CustomHooks/useUserValidation";
import HeaderComponent from "../BaseHeader/HeaderComponent";
import FooterComponent from "../BaseFooter/FooterComponent";
import ErrorAlertComponent from "../ReusableComponents/ErrorAlertComponent";
import SuccessAlertComponent from "../ReusableComponents/SuccessAlertComponent";

const driverLicenseRegExp = /^\d{8}$/;
const errorAlertText = "You are a bad boy";
const successAlertText = "You are a good boy";

const ProfileComponent = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [alertErrorOpen, setAlertErrorOpen] = useState(false);
  const [alertSuccessOpen, setAlertSuccessOpen] = useState(false);
  var isValid = useUserValidation();
  const hasReloaded = sessionStorage.getItem("hasReloaded");

  useEffect(() => {
    if (!isValid) {
      navigate("/");
    }
    UserAPI.GetUser()
      .then((userInfo) => {
        if (
          userInfo.data.driversLicense != null &&
          userInfo.data.driversLicense.match(driverLicenseRegExp)
        ) {
          setStatus("Driver");
        } else {
          setStatus("User");
          if (!hasReloaded) {
            sessionStorage.setItem("hasReloaded", true);
            window.location.reload();
          }
        }
        var array = userInfo.data.birthdate.split("T");
        userInfo.data.birthdate = array[0];
        setUser(userInfo.data);
      })
      .catch((error) => {
        setAlertErrorOpen(true);
        console.log(error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#F0F0F0" }}>
      <HeaderComponent />
      {alertErrorOpen == true ? (
        <ErrorAlertComponent text={errorAlertText} />
      ) : null}
      {alertSuccessOpen == true ? (
        <SuccessAlertComponent text={successAlertText} />
      ) : null}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        <Grid
          alignItems="center"
          style={{ display: "flex" }}
          container
          direction="column"
        >
          <AccountBoxIcon sx={{ fontSize: 70 }} />
          <TextField
            style={{ backgroundColor: "#808080" }}
            margin="dense"
            label="Name"
            id="Name"
            variant="filled"
            value={user.name}
            InputLabelProps={{
              style: {
                color: "white",
              },
              shrink: true,
            }}
            InputProps={{
              style: {
                color: "white",
              },
              readOnly: true,
            }}
          />
          <TextField
            style={{ backgroundColor: "#808080" }}
            margin="dense"
            label="Surname"
            id="Surname"
            variant="filled"
            InputLabelProps={{
              style: {
                color: "white",
              },
              shrink: true,
            }}
            InputProps={{
              style: {
                color: "white",
              },
              readOnly: true,
            }}
            value={user.surname}
          />
          <TextField
            style={{ backgroundColor: "#808080" }}
            margin="dense"
            id="Birthdate"
            label="Birthday"
            variant="filled"
            defaultValue="undefined"
            value={user.birthdate}
            InputLabelProps={{
              style: {
                color: "white",
              },
              shrink: true,
            }}
            InputProps={{
              style: {
                color: "white",
              },
              readOnly: true,
            }}
          />
          <TextField
            style={{ backgroundColor: "#808080" }}
            margin="dense"
            label="Phone number"
            InputLabelProps={{
              style: {
                color: "white",
              },
              shrink: true,
            }}
            InputProps={{
              style: {
                color: "white",
              },
              readOnly: true,
            }}
            id="PhoneNumber"
            variant="filled"
            value={user.phoneNumber}
          />
          <TextField
            style={{ backgroundColor: "#808080" }}
            margin="dense"
            label="Email"
            InputLabelProps={{
              style: {
                color: "white",
              },
              shrink: true,
            }}
            InputProps={{
              style: {
                color: "white",
              },
              readOnly: true,
            }}
            id="Email"
            variant="filled"
            value={user.email}
          />
          <TextField
            style={{ backgroundColor: "#808080" }}
            margin="dense"
            label="Status"
            InputLabelProps={{
              style: {
                color: "white",
              },
              shrink: true,
            }}
            InputProps={{
              style: {
                color: "white",
              },
              readOnly: true,
            }}
            id="Status"
            variant="filled"
            value={status}
          />
          {status == "Driver" ? (
            <TextField
              style={{ backgroundColor: "#808080" }}
              margin="dense"
              label="Drivers License Number"
              InputLabelProps={{
                style: {
                  color: "white",
                },
                shrink: true,
              }}
              InputProps={{
                style: {
                  color: "white",
                },
                readOnly: true,
              }}
              id="DriversLicense"
              variant="filled"
              value={user.driversLicense}
            />
          ) : null}
          {status == "Driver" ? (
            <TextField
              style={{ backgroundColor: "#808080" }}
              margin="dense"
              label="Vehicle Type"
              InputLabelProps={{
                style: {
                  color: "white",
                },
                shrink: true,
              }}
              InputProps={{
                style: {
                  color: "white",
                },
                readOnly: true,
              }}
              id="VehicleType"
              variant="filled"
              value={user.vehicleType}
            />
          ) : null}

          {status == "Driver" ? (
            <TextField
              style={{ backgroundColor: "#808080" }}
              margin="dense"
              label="License Number"
              InputLabelProps={{
                style: {
                  color: "white",
                },
                shrink: true,
              }}
              InputProps={{
                style: {
                  color: "white",
                },
                readOnly: true,
              }}
              id="LicenseNumber"
              variant="filled"
              value={user.licenseNumber}
            />
          ) : null}
          <div style={{ marginTop: "5%" }}>
            {status == "User" ? <DriverDialog /> : null}
          </div>
        </Grid>
      </div>
      <FooterComponent />
    </div>
  );
};
export default ProfileComponent;
