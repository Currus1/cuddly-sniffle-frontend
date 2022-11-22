import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import styles from "./Styles/RegistryStyle.module.css";
import ProfileBannerDesign from "../ReusableComponents/ProfileBannerDesign.jsx";
import RegisterProfileTable from "./RegisterProfileTable.jsx";
import UserAPI from "../../Services/UserServices/UserAPI.js";
import HeaderComponent from "../BaseHeader/HeaderComponent.jsx";
import FooterComponent from "../BaseFooter/FooterComponent.jsx";
import backgroundStyle from "../Styles/BackgroundStyle.module.css";

const RegisterComponent = () => {
  const [user] = useState([]);
  const [errorText, setErrorText] = useState("");

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
    <div className={backgroundStyle.bg}>
      <HeaderComponent />
      <Grid>
        <Paper className={styles.paperStyle}>
          <ProfileBannerDesign
            headerText={"Create an Account"}
            smallText={"Enter your user details below"}
          />
          <RegisterProfileTable
            buttonText={"Join Currus family!"}
            buttonClickedEvent={registerClicked}
          ></RegisterProfileTable>
          <h5 className={styles.errorStyle}>{errorText}</h5>
        </Paper>
      </Grid>
      <FooterComponent />
    </div>
  );
};
export default RegisterComponent;
