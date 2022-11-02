import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { paperStyle, errorStyle } from "./styles/muiStyle.js";
import ProfileBannerDesign from "./reusableComponents/ProfileBannerDesign.jsx";
import RegisterProfileTable from "./reusableComponents/RegisterProfileTable.jsx";
import UserAPI from "../UserServices/UserAPI";

const RegisterComponent = () => {
  const [user] = useState([]);
  const [errorText, setErrorText] = useState('');

  function registerClicked() {
    if (
      document.getElementById("Name").value !== "" &&
      document.getElementById("Surname").value !== "" &&
      document.getElementById("Birthdate").value !== "" &&
      document.getElementById("Email").value !== "" &&
      document.getElementById("PhoneNumber").value !== ""
    ) {
      // ADDING USER
      user.Name = document.getElementById("Name").value;
      user.Surname = document.getElementById("Surname").value;
      user.Birthdate = document.getElementById("Birthdate").value;
      user.Email = document.getElementById("Email").value;
      user.PhoneNumber = document.getElementById("PhoneNumber").value;

      setErrorText("User Added Succesfully. Welcome To Currus!");
      console.log("User is added.");
      UserAPI.addUser(user);
    } else {
      // ERROR
      alert("Not all fields were filled!");
    }
  }

  return (
    <>
      <Grid>
        <Paper style={paperStyle}>
          <ProfileBannerDesign
            headerText={"Create an Account"}
            smallText={"Enter your user details below"}
          />
          <RegisterProfileTable
            buttonText={"Join Currus family!"}
            buttonClickedEvent={registerClicked}
          ></RegisterProfileTable>
          <h5 style={errorStyle}>{errorText}</h5>
        </Paper>
      </Grid>
    </>
  );
};
export default RegisterComponent;
