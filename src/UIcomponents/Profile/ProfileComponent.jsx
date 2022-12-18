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
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProfileCardComponent from "../ReusableComponents/ProfileCardComponent";

const driverLicenseRegExp = /^\d{8}$/;

const ProfileComponent = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    birthdate: "",
    phoneNumber: "",
    email: "",
    driversLicense: "",
    vehicleType: "",
    licenseNumber: "",
  });
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [alertErrorOpen, setAlertErrorOpen] = useState(false);
  const [alertSuccessOpen, setAlertSuccessOpen] = useState(false);
  const [errorAlertText, setErrorAlertText] = useState("Error!");
  const [successAlertText, SetSuccessAlertText] = useState("Error!");
  var isValid = useUserValidation();
  const hasReloaded = sessionStorage.getItem("hasReloaded");
  const matches = useMediaQuery("(min-width:600px)");

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
        setErrorAlertText("Server failed loading the data!");
        setAlertErrorOpen(true);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#E8E5DA" }}>
      <HeaderComponent />
      {alertErrorOpen == true ? (
        <ErrorAlertComponent text={errorAlertText} />
      ) : null}
      {alertSuccessOpen == true ? (
        <SuccessAlertComponent text={successAlertText} />
      ) : null}
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <Grid container spacing={2} style={{ width: "50vh" }}>
          <Grid item xs={12}>
            {matches ? (
              <h3 style={{ color: "#7BC950", fontFamily: "montserrat" }}>
                User Information
              </h3>
            ) : (
              <h3
                style={{
                  color: "#7BC950",
                  fontFamily: "montserrat",
                  marginLeft: "5vh",
                }}
              >
                User Information
              </h3>
            )}
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <TextField
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
                readOnly: true,
              }}
              label="First Name"
              id="Name"
              value={user.name}
              size="small"
              variant="filled"
              margin="dense"
              onChange={() => {}}
            />
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <TextField
              margin="dense"
              label="Last Name"
              id="Surname"
              variant="filled"
              size="small"
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
                readOnly: true,
              }}
              value={user.surname}
              onChange={() => {}}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TextField
              margin="dense"
              id="Birthdate"
              label="Birth Date"
              variant="filled"
              value={user.birthdate}
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
                readOnly: true,
              }}
              onChange={() => {}}
            />
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <TextField
              margin="dense"
              label="Status"
              size="small"
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
                readOnly: true,
              }}
              id="Status"
              variant="filled"
              value={status}
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={12}>
            {matches ? (
              <h3 style={{ color: "#7BC950", fontFamily: "montserrat" }}>
                Contact Information
              </h3>
            ) : (
              <h3
                style={{
                  color: "#7BC950",
                  fontFamily: "montserrat",
                  marginLeft: "5vh",
                }}
              >
                Contact Information
              </h3>
            )}
          </Grid>

          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <TextField
              size="small"
              margin="dense"
              label="Phone number"
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
                readOnly: true,
              }}
              id="PhoneNumber"
              variant="filled"
              value={user.phoneNumber}
              onChange={() => {}}
            />
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            sm={6}
            md={6}
          >
            <TextField
              size="small"
              margin="dense"
              label="Email"
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
                readOnly: true,
              }}
              id="Email"
              variant="filled"
              value={user.email}
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={12}>
            {matches ? (
              <h3 style={{ color: "#7BC950", fontFamily: "montserrat" }}>
                Driver Information
              </h3>
            ) : (
              <h3
                style={{
                  color: "#7BC950",
                  fontFamily: "montserrat",
                  marginLeft: "5vh",
                }}
              >
                Driver Information
              </h3>
            )}
          </Grid>
          {status == "Driver" ? (
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={12}
              sm={6}
              md={6}
            >
              <TextField
                size="small"
                margin="dense"
                label="Drivers License"
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
                  readOnly: true,
                }}
                id="DriversLicense"
                variant="filled"
                value={user.driversLicense}
                onChange={() => {}}
              />
            </Grid>
          ) : null}
          {status == "Driver" ? (
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={12}
              sm={6}
              md={6}
            >
              <TextField
                size="small"
                margin="dense"
                label="Vehicle Type"
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
                  readOnly: true,
                }}
                id="VehicleType"
                variant="filled"
                value={user.vehicleType}
                onChange={() => {}}
              />
            </Grid>
          ) : null}

          {status == "Driver" ? (
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={12}
              sm={6}
              md={6}
            >
              <TextField
                size="small"
                margin="dense"
                label="License Number"
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
                  readOnly: true,
                }}
                id="LicenseNumber"
                variant="filled"
                value={user.licenseNumber}
                onChange={() => {}}
              />
            </Grid>
          ) : null}
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
          >
            {status == "User" ? <DriverDialog /> : null}
          </Grid>
        </Grid>
      </Box>
      <ProfileCardComponent />
      <FooterComponent />
    </div>
  );
};
export default ProfileComponent;
