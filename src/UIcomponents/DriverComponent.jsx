import React, { useState, useEffect } from "react";
import "../bootstrap.css";
import "../App.css";
import "./styles/DriverStyle.css";
import DriverAPI from "../DriverServices/DriverAPI";
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const DriverComponent = () => {
  const [drivers, setDriver] = useState([]);

  useEffect(() => {
    loadTable();
  }, []); // initializing the table on load (once)

  function loadTable() {
    DriverAPI.GetAllDrivers()
      .then((res) => setDriver(res.data))
      .catch((err) => console.log(err));
  }

  function SaveClicked() {
    if (
      document.getElementById("Id").value !== "" &&
      document.getElementById("Name").value !== "" &&
      document.getElementById("Surname").value !== "" &&
      document.getElementById("Birthdate").value !== "" &&
      document.getElementById("Email").value !== "" &&
      document.getElementById("PhoneNumber").value !== ""
    ) {
      drivers.Id = document.getElementById("Id").value;
      drivers.Name = document.getElementById("Name").value;
      drivers.Surname = document.getElementById("Surname").value;
      drivers.Birthdate = document.getElementById("Birthdate").value;
      drivers.Email = document.getElementById("Email").value;
      drivers.PhoneNumber = document.getElementById("PhoneNumber").value;
      drivers.VehicleType = document.getElementById("VehicleType").value;
      drivers.LicenseNumber = document.getElementById("LicenseNumber").value;

      DriverAPI.AddingDriver(drivers);
      console.log("Registered");
    } else {
      alert("Please make sure to enter all the fields");
    }
  }

  // Load the drivers to data const via useState
  function LoadClicked() {
    loadTable();
  }

  const avatarStyle = {backgroundColor: '#0099CC'}
  const marginTop = {marginTop: 15}

  return (
    <>
      <Grid>
        <Paper elevation={20} className="paperStyle">
          <Grid align='center'>
            <Avatar style={avatarStyle}>
              <PersonAddIcon/>
            </Avatar>
            <h2 className="headerStyle">Creating a driver</h2>
            <Typography variant = 'caption'>Fill in all the fields below</Typography>
            </Grid>
            <form>
              <TextField fullWidth label='Name' placeholder='Enter your name' style={marginTop}/>
              <TextField fullWidth label='Surname' placeholder='Enter your surname' style={marginTop}/>
              <TextField fullWidth label='Email' placeholder='Enter your email'style={marginTop}/>
              <TextField fullWidth label='Phone number' placeholder='Enter your phone number' style={marginTop}/>
              <TextField fullWidth label='License number' placeholder='Enter your license number' style={marginTop}/>
              <Button type='submit' variant='contained' color='primary' style={marginTop}>Add</Button>
            </form>
        </Paper>
      </Grid>
    </>
  );
};

export default DriverComponent;
