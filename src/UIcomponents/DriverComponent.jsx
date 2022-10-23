import React, { useState, useEffect } from "react";
import "../bootstrap.css";
import "../App.css";
import { Grid, Paper } from "@material-ui/core";
import TripAPI from "../TripServices/TripAPI";
import DriverAPI from "../DriverServices/DriverAPI";
import {
  paperStyle,
} from "./styles/muiStyle.js";
import AddMemberDesignTop from "./reusableComponents/AddMemberBannerDesign";
import AddDriverTable from "./reusableComponents/AddDriverTable";

const DriverComponent = () => {
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [driver] = useState([]);

  function SaveClicked() {
    if (
      document.getElementById("Id").value !== "" &&
      document.getElementById("Name").value !== "" &&
      document.getElementById("Surname").value !== "" &&
      document.getElementById("Birthdate").value !== "" &&
      document.getElementById("Email").value !== "" &&
      document.getElementById("PhoneNumber").value !== "" &&
      document.getElementById("LicenseNumber").value !== ""
    ) {
      // ADDING DRIVER
      driver.Id = document.getElementById("Id").value;
      driver.Name = document.getElementById("Name").value;
      driver.Surname = document.getElementById("Surname").value;
      driver.Birthdate = document.getElementById("Birthdate").value;
      driver.Email = document.getElementById("Email").value;
      driver.VehicleType = vehicleType;
      driver.PhoneNumber = document.getElementById("PhoneNumber").value;
      driver.LicenseNumber = document.getElementById("LicenseNumber").value;

      console.log("Driver is added.");
      DriverAPI.AddDriver(driver);
    } else {
      // ERROR
      alert("Not all fields were filled!");
    }
  }

  useEffect(() => {
    TripAPI.getVehicleTypeEnum().then((response) =>
      setVehicleTypes(response.data)
    );
  }, []);

  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
  };

  return (
    <>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <AddMemberDesignTop headerText={"Creating a driver"} />
          <form>
            <AddDriverTable SaveClicked={SaveClicked} vehicleType={vehicleType} handleVehicleTypeChange={handleVehicleTypeChange} vehicleTypes={vehicleTypes}/>
          </form>
        </Paper>
      </Grid>
    </>
  );
};
export default DriverComponent;
