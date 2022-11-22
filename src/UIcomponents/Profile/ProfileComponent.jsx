import React, { useState, useEffect } from "react";
import styles from "./Styles/ProfileStyle.module.css";
import { Grid, Paper } from "@material-ui/core";
import TripAPI from "../../Services/TripServices/TripAPI.js";
import ProfileBannerDesign from "../ReusableComponents/ProfileBannerDesign.jsx";
import ProfileTable from "./ProfileTable.jsx";
import UserAPI from "../../Services/UserServices/UserAPI.js";
import HeaderComponent from "../BaseHeader/HeaderComponent.jsx";
import backgroundStyle from "../Styles/BackgroundStyle.module.css";
import FooterComponent from "../BaseFooter/FooterComponent.jsx";

const ProfileComponent = () => {
  const [response, setResponse] = useState([]);
  const [user] = useState([]);
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    TripAPI.getVehicleTypes().then((response) =>
      setVehicleTypes(response.data)
    );

    setVehicleType("Sedan");

    UserAPI.GetUser(2).then((response) => setResponse(response.data));
  }, []);

  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
  };

  function SaveButtonClicked() {
    if (
      document.getElementById("Name").value !== "" &&
      document.getElementById("Surname").value !== "" &&
      document.getElementById("Birthdate").value !== "" &&
      document.getElementById("Email").value !== "" &&
      document.getElementById("PhoneNumber").value !== ""
    ) {
      // ADDING USER
      user.Id = 6;
      user.Name = document.getElementById("Name").value;
      user.Surname = document.getElementById("Surname").value;
      user.Birthdate = document.getElementById("Birthdate").value;
      user.Email = document.getElementById("Email").value;
      user.PhoneNumber = document.getElementById("PhoneNumber").value;

      setErrorText("Your user is updated!");
      console.log("User is updated.");
      UserAPI.UpdateUser(user);
    } else {
      // ERROR
      alert("Not all fields were filled!");
    }
  }

  function BecomeADriverClicked() {
    if (
      document.getElementById("Name").value !== "" &&
      document.getElementById("Surname").value !== "" &&
      document.getElementById("Birthdate").value !== "" &&
      document.getElementById("Email").value !== "" &&
      document.getElementById("PhoneNumber").value !== "" &&
      document.getElementById("VehicleType").value !== "" &&
      document.getElementById("LicenseNumber").value !== ""
    ) {
      // ADDING USER
      user.Id = 6;
      user.VehicleType = vehicleType;
      user.LicenseNumber = document.getElementById("LicenseNumber").value;
      user.Name = document.getElementById("Name").value;
      user.Surname = document.getElementById("Surname").value;
      user.Birthdate = document.getElementById("Birthdate").value;
      user.Email = document.getElementById("Email").value;
      user.PhoneNumber = document.getElementById("PhoneNumber").value;

      setErrorText("Your driver is updated!");
      console.log("Driver is updated.");
      UserAPI.UpdateDriver(user);
    } else {
      // ERROR
      alert("Not all fields were filled!");
    }
  }

  return (
    <div className={backgroundStyle.bg}>
      <HeaderComponent />
      <Grid>
        <Paper elevation={20} className={styles.paperStyle}>
          <ProfileBannerDesign
            headerText={"Teste Testaviciene"}
            smallText={"See and change your profile information"}
          />
          <ProfileTable
            saveClicked={SaveButtonClicked}
            becomeADriverClicked={BecomeADriverClicked}
            vehicleType={vehicleType}
            name={response.name}
            surname={response.surname}
            birthdate={response.Birthdate}
            phoneNumber={response.phoneNumber}
            email={response.email}
            vehicleTypes={vehicleTypes}
            handleVehicleTypeChange={handleVehicleTypeChange}
          ></ProfileTable>
          <h5 className={styles.errorStyle}>{errorText}</h5>
        </Paper>
      </Grid>
      <FooterComponent />
    </div>
  );
};
export default ProfileComponent;
