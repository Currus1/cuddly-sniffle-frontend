import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import UserAPI from "../../Services/UserServices/UserAPI.js";
import { useNavigate } from "react-router-dom";
import DriverDialog from "./DriverDialog";
import { useUserValidation } from "../../CustomHooks/useUserValidation";
import HeaderComponent from "../BaseHeader/HeaderComponent";
import FooterComponent from "../BaseFooter/FooterComponent";
import ErrorAlertComponent from "../ReusableComponents/ErrorAlertComponent";
import SuccessAlertComponent from "../ReusableComponents/SuccessAlertComponent";
import Box from "@mui/material/Box";
import ProfileCardComponent from "../ReusableComponents/ProfileCardComponent";
import { ProfileGridTextField } from "./ReusableComponents/ProfileGridTextField.jsx";
import styles from "./Styles/ProfileStyle.module.css";
import { ProfileCaptionField } from "./ReusableComponents/ProfileCaptionField.jsx";

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
        }
        var array = userInfo.data.birthdate.split("T");
        userInfo.data.birthdate = array[0];
        setUser(userInfo.data);
      })
      .catch(() => {
        setErrorAlertText("Server failed loading the data!");
        setAlertErrorOpen(true);
      });
  }, []);

  return (
    <div>
      <HeaderComponent />
      {alertErrorOpen == true ? (
        <ErrorAlertComponent text={errorAlertText} />
      ) : null}
      {alertSuccessOpen == true ? (
        <SuccessAlertComponent text={successAlertText} />
      ) : null}
      <Box className={styles.box}>
        <Grid container spacing={3} className={styles.halfViewportWidth}>
          <ProfileCaptionField value="User Information" />
          <ProfileGridTextField label="Name" id="name" value={user.name} />
          <ProfileGridTextField
            label="Last Name"
            id="surname"
            value={user.surname}
          />
          <ProfileGridTextField
            label="Birth Date"
            id="birthdate"
            value={user.birthdate}
          />
          <ProfileGridTextField label="Status" id="status" value={status} />
          <ProfileCaptionField value="Contact Information" />
          <ProfileGridTextField
            label="Phone Number"
            id="phoneNumber"
            value={user.phoneNumber}
          />
          <ProfileGridTextField label="Email" id="email" value={user.email} />
          <ProfileCaptionField value="Driver Information" />
          {status == "Driver" ? (
            <>
              <ProfileGridTextField
                label="Drivers License"
                id="driversLicense"
                value={user.driversLicense}
              />
              <ProfileGridTextField
                label="Vehicle Type"
                id="vehicleType"
                value={user.vehicleType}
              />
              <ProfileGridTextField
                label="Car License Number"
                id="licenseNumber"
                value={user.licenseNumber}
              />
            </>
          ) : (
            <Grid className={styles.center} item xs={12}>
              <DriverDialog />
            </Grid>
          )}
        </Grid>
      </Box>
      <ProfileCardComponent />
      <FooterComponent />
    </div>
  );
};
export default ProfileComponent;
