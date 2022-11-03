import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import {
  saveButtonStyle,
  textFieldStyle,
  marginTop,
} from "../Styles/CustomLowButtonStyle";

export default function RegisterProfileTable({
  buttonText,
  buttonClickedEvent,
}) {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            style={marginTop}
            label="Name"
            id="Name"
            placeholder="Enter your name"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            style={marginTop}
            label="Surname"
            id="Surname"
            placeholder="Enter your surname"
          />
        </Grid>
        <Grid item xs={12} md={6} align="left">
          <TextField
            style={textFieldStyle}
            id="Birthdate"
            label="Birthday"
            type="date"
            defaultValue="1999-12-25"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} align="right">
          <TextField
            style={textFieldStyle}
            label="Phone number"
            id="PhoneNumber"
            placeholder="Enter your phone number"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            style={marginTop}
            fullWidth
            label="Email"
            id="Email"
            placeholder="Enter your email"
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={12} align="right">
          <Button
            fullWidth
            style={saveButtonStyle}
            onClick={buttonClickedEvent}
          >
            {buttonText}
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
