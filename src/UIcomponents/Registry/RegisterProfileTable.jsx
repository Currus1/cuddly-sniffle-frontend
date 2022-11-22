import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import styles from "./Styles/RegistryStyle.module.css";

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
            className={styles.marginTop}
            label="Name"
            id="Name"
            placeholder="Enter your name"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            className={styles.marginTop}
            label="Surname"
            id="Surname"
            placeholder="Enter your surname"
          />
        </Grid>
        <Grid item xs={12} md={6} align="left">
          <TextField
            className={styles.textFieldStyle}
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
            className={styles.textFieldStyle}
            label="Phone number"
            id="PhoneNumber"
            placeholder="Enter your phone number"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            className={styles.marginTop}
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
            className={styles.saveButtonStyle}
            onClick={buttonClickedEvent}
          >
            {buttonText}
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
