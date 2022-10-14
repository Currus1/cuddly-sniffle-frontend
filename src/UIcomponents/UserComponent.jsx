import React, { useState } from "react";
import "../bootstrap.css";
import "../App.css";
import "./styles/UserStyle.css";
import { Grid, Paper } from "@material-ui/core";
import UserAPI from "../UserServices/UserAPI";
import AddMemberDesignTop from "./reusableComponents/AddMemberBannerDesign";
import AddUserTable from "./reusableComponents/AddUserTable";

const UserComponent = () => {
  const [user] = useState([]);

  function SaveClicked() {
    if (
      document.getElementById("Id").value !== "" &&
      document.getElementById("Name").value !== "" &&
      document.getElementById("Surname").value !== "" &&
      document.getElementById("Birthdate").value !== "" &&
      document.getElementById("Email").value !== "" &&
      document.getElementById("PhoneNumber").value !== ""
    ) {
      // ADDING USER
      user.Id = document.getElementById("Id").value;
      user.Name = document.getElementById("Name").value;
      user.Surname = document.getElementById("Surname").value;
      user.Birthdate = document.getElementById("Birthdate").value;
      user.Email = document.getElementById("Email").value;
      user.PhoneNumber = document.getElementById("PhoneNumber").value;

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
        <Paper elevation={20} className="paperStyle" align="left">
          <AddMemberDesignTop headerText={"Creating a user"} />
          <form>
            <AddUserTable SaveClicked={SaveClicked}/>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default UserComponent;
