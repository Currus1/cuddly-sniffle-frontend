import React, { useState, useEffect } from "react";
import styles from "./Styles/ProfileStyle.module.css";
import { Grid, Paper } from "@material-ui/core";
import TripAPI from "../../Services/TripServices/TripAPI.js";
import UserAPI from "../../Services/UserServices/UserAPI.js";
import HeaderComponent from "../BaseHeader/HeaderComponent.jsx";
import backgroundStyle from "../Styles/BackgroundStyle.module.css";
import FooterComponent from "../BaseFooter/FooterComponent.jsx";
import AuthService from "../../Services/AuthServices/auth.service";
import { useNavigate } from "react-router-dom";

const ProfileComponent = () => {
  const [user, setUser] = useState([]);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
      navigate("/login");
    }
    UserAPI.GetUser()
      .then((userInfo) => {
        var array = userInfo.data.birthDate.split("T");
        userInfo.data.birthDate = array[0];
        setUser(userInfo.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className={backgroundStyle.bg}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <HeaderComponent />
      <Grid style={{ height: "60vh" }}>lol</Grid>
      <FooterComponent />
    </div>
  );
};
export default ProfileComponent;
