import { React, useMemo, useState, useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import HeaderComponent from "../BaseHeader/HeaderComponent";
import TripAPI from "../../Services/TripServices/TripAPI.js";
import SecretAPI from "../../Services/SecretServices/SecretServices.js";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import TripPlanningSaveComponent from "./TripPlanningSaveComponent";
import EnterAddressComponent from "./EnterAddressComponent";
import FooterComponent from "../BaseFooter/FooterComponent";
import backgroundStyle from "../Styles/BackgroundStyle.module.css";
import { useUserValidation } from "../../CustomHooks/useUserValidation";
import { useAsyncError, useNavigate } from "react-router-dom";
import UserAPI from "../../Services/UserServices/UserAPI";
import ErrorAlertComponent from "../ReusableComponents/ErrorAlertComponent";
import SuccessAlertComponent from "../ReusableComponents/SuccessAlertComponent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import styles from "./Styles/PlanTripStyle.module.css";

import Button from "@mui/material/Button";

const driverLicenseRegExp = /^\d{8}$/;
const tripDateRegExp = /^\d{4}-\d{2}-\d{2}$/;
const threeDaysInMs = 259200000;
const twoMonthsInMs = 5184000000;

const PlanningComponent = () => {
  const navigate = useNavigate("");
  var isValid = useUserValidation();
  const [alertErrorOpen, setAlertErrorOpen] = useState(false);
  const [alertSuccessOpen, setAlertSuccessOpen] = useState(false);
  const errorAlertText = "Sorry. You cannot create a trip!";
  const successAlertText = "Trip created successfully!";
  const [tripDate, setTripDate] = useState("");
  const [price, setPrice] = useState("");
  const [seats, setSeats] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const handleToggle = () => {};

  useEffect(() => {
    if (!isValid) {
      navigate("/");
    }
    UserAPI.GetUser()
      .then((userInfo) => {
        if (
          userInfo.data.driversLicense == null ||
          !userInfo.data.driversLicense.match(driverLicenseRegExp)
        ) {
          navigate("/");
        }
        var number = getSeatNumber(userInfo.data.vehicleType);
        setVehicleType(userInfo.data.vehicleType);
        setSeats(number);
      })
      .catch((error) => {
        setAlertErrorOpen(true);
      });
  }, []);

  function getSeatNumber(VehicleType) {
    switch (VehicleType) {
      case "SUV":
        return 6;
      case "EV":
        return 4;
      case "VAN":
        return 12;
      case "SEDAN":
        return 4;
    }
  }

  ValidatorForm.addValidationRule("tripDatePast", (value) => {
    var inputDate = new Date(value);
    var today = new Date();
    if (value.match(tripDateRegExp) && today.getTime() < inputDate.getTime()) {
      return true;
    }
    return false;
  });

  ValidatorForm.addValidationRule("tripDateClose", (value) => {
    var today = new Date();
    var inputDate = new Date(value);
    if (
      value.match(tripDateRegExp) &&
      inputDate.getTime() - threeDaysInMs > today.getTime()
    ) {
      return true;
    }
    return false;
  });

  ValidatorForm.addValidationRule("price", (value) => {
    if (value <= 0) {
      return false;
    }
    return true;
  });

  ValidatorForm.addValidationRule("tripDateLong", (value) => {
    var today = new Date();
    var inputDate = new Date(value);
    if (
      value.match(tripDateRegExp) &&
      inputDate.getTime() - twoMonthsInMs < today.getTime()
    ) {
      return true;
    }
    return false;
  });

  ValidatorForm.addValidationRule("SeatsMax", (value) => {
    var number = getSeatNumber(vehicleType);
    if (value <= number) {
      return true;
    }
    return false;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {alertErrorOpen == true ? (
        <ErrorAlertComponent text={errorAlertText} />
      ) : null}
      {alertSuccessOpen == true ? (
        <SuccessAlertComponent text={successAlertText} />
      ) : null}
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Planner
        </Typography>
        <ValidatorForm onSubmit={handleSubmit}>
          <TextValidator
            InputLabelProps={{ shrink: true }}
            margin="normal"
            fullWidth
            id="tripDate"
            label="Trip Date"
            name="tripDate"
            autoFocus
            type="date"
            validators={["tripDatePast", "tripDateClose", "tripDateLong"]}
            errorMessages={[
              "Trip Date cannot be in the past",
              "Trip Date should be at least 3 days from now",
              "Trip Date should not be more than two months from now",
            ]}
            onChange={(event) => {
              setTripDate(event.target.value);
            }}
            value={tripDate}
          />
          <TextValidator
            margin="normal"
            fullWidth
            id="price"
            label="Price per Person (€)"
            name="price"
            type="number"
            autoFocus
            validators={["price"]}
            errorMessages={["Price cannot be less than zero"]}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            value={price}
          />
          <TextValidator
            margin="normal"
            fullWidth
            id="seats"
            label="Seats"
            name="seats"
            type="number"
            autoComplete="seats"
            validators={["SeatsMax"]}
            errorMessages={["Seats number beyond limit"]}
            onChange={(event) => {
              setSeats(event.target.value);
            }}
            value={seats}
          />

          <div
            style={{
              justifyContent: "center",
              display: "flex",
              marginTop: "10%",
            }}
          >
            <Button
              className={styles.createButton}
              variant="outlined"
              onClick={() => {}}
            >
              CREATE
            </Button>
          </div>
        </ValidatorForm>
      </Box>
      <FooterComponent />
    </>
  );
};

export default PlanningComponent;
