import React from "react";
import {
    marginTop,
    bigMarginTop,
    buttonStyle,
  } from "../styles/muiStyle.js";
  import {
    TextField,
    Button,
  } from "@material-ui/core";

export default function AddUserTable({SaveClicked}) {
  return (
    <>
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
      <Button onClick={SaveClicked} variant="contained" style={buttonStyle}>
        Add
      </Button>
    </>
  );
}
