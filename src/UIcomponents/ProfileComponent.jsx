import React, { useState, useEffect } from "react";
import { paperStyle, errorStyle } from "./styles/muiStyle.js";
import { Grid, Paper } from "@material-ui/core";
import TripAPI from "../TripServices/TripAPI";
import ProfileBannerDesign from "./reusableComponents/ProfileBannerDesign.jsx";
import AddProfileTable from "./reusableComponents/AddProfileTable.jsx";
import UserAPI from "../UserServices/UserAPI.js";

const ProfileComponent = () => {
  const [response, setResponse] = useState([]);
  const [user] = useState([]);
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    TripAPI.getVehicleTypeEnum().then((response) =>
      setVehicleTypes(response.data)
    );
    
    setVehicleType("Sedan");
    
    UserAPI.GetUser(2).then((response) => 
    setResponse(response.data)
    );
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
    <>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <ProfileBannerDesign
            headerText={"Teste Testaviciene"}
            smallText={"See and change your profile information"}
          />
          <AddProfileTable
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
          ></AddProfileTable>
          <h5 style={errorStyle}>{errorText}</h5>
        </Paper>
      </Grid>
    </>
  );
};
export default ProfileComponent;
