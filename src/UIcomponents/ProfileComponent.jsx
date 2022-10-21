import React, { useState } from "react";
import { paperStyle, errorStyle } from "./styles/muiStyle.js";
import { Grid, Paper } from "@material-ui/core";
import ProfileBannerDesign from "./reusableComponents/ProfileBannerDesign.jsx";
import AddProfileTable from "./reusableComponents/AddProfileTable.jsx";
import UserAPI from "../UserServices/UserAPI.js";

const ProfileComponent = () => {
  const [user] = useState([]);
  const [errorText, setErrorText] = useState('');

  function SaveButtonClicked() {
    if (
      document.getElementById("Name").value !== "" &&
      document.getElementById("Surname").value !== "" &&
      document.getElementById("Birthdate").value !== "" &&
      document.getElementById("Email").value !== "" &&
      document.getElementById("PhoneNumber").value !== ""
    ) {
      // ADDING USER
      user.Id = 1;
      user.Name = document.getElementById("Name").value;
      user.Surname = document.getElementById("Surname").value;
      user.Birthdate = document.getElementById("Birthdate").value;
      user.Email = document.getElementById("Email").value;
      user.PhoneNumber = document.getElementById("PhoneNumber").value;

      setErrorText('Your user is updated!');
      console.log("User is updated.");
      UserAPI.UpdateUser(user);
    } else {
      // ERROR
      alert("Not all fields were filled!");
    }
  }

  return (
    <>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <ProfileBannerDesign headerText={"Teste Testaviciene"} smallText={"See and change your profile information"} />
            <AddProfileTable saveClicked={SaveButtonClicked}></AddProfileTable>
            <h5 style={errorStyle}>{errorText}</h5>
        </Paper>
      </Grid>
    </>
  );
};
export default ProfileComponent;
