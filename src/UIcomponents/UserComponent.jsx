import React, { useState } from "react";
import "../bootstrap.css";
import "../App.css";
import "./styles/UserStyle.css";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import UserAPI from "../UserServices/UserAPI";

const UserComponent = () => {
  const [user] = useState([]);

  function saveClicked() {
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

  const avatarStyle = { backgroundColor: "#0099CC" };
  const marginTop = { marginTop: 15 };
  const bigMarginTop = { marginTop: 30 };
  const buttonStyle = {
    marginTop: 30,
    backgroundColor: "#0099CC",
    width: "100%",
  };
  const iconStyle = {
    width: "40",
    height: "40",
  };

  return (
    <>
      <Grid>
        <Paper elevation={20} className="paperStyle">
          <Grid align="center">
            <Avatar style={avatarStyle}>
              {" "}
              <PersonAddIcon style={iconStyle} />{" "}
            </Avatar>
            <h2 className="headerStyle">Creating a user</h2>
            <Typography variant="caption">
              Fill in all the fields below
            </Typography>
          </Grid>
          <form>
            <TextField
              fullWidth
              label="Id"
              id="Id"
              placeholder="User's Id"
              style={marginTop}
            />
            <TextField
              fullWidth
              label="Name"
              id="Name"
              placeholder="Enter your name"
              style={marginTop}
            />
            <TextField
              fullWidth
              label="Surname"
              id="Surname"
              placeholder="Enter your surname"
              style={marginTop}
            />
            <TextField
              fullWidth
              id="Birthdate"
              label="Birthday"
              type="date"
              defaultValue="1999-12-25"
              style={bigMarginTop}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              fullWidth
              label="Email"
              id="Email"
              placeholder="Enter your email"
              style={marginTop}
            />
            <TextField
              fullWidth
              label="Phone number"
              id="PhoneNumber"
              placeholder="Enter your phone number"
              style={marginTop}
            />
            <Button
              onClick={saveClicked}
              variant="containeds"
              style={buttonStyle}
            >
              Add
            </Button>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default UserComponent;
