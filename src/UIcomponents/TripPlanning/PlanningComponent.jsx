import { React, useMemo, useState, useEffect, useRef } from "react";
import HeaderComponent from "../BaseHeader/HeaderComponent";
import FooterComponent from "../BaseFooter/FooterComponent";
import { useUserValidation } from "../../CustomHooks/useUserValidation";
import { useNavigate } from "react-router-dom";
import UserAPI from "../../Services/UserServices/UserAPI";
import ErrorAlertComponent from "../ReusableComponents/ErrorAlertComponent";
import SuccessAlertComponent from "../ReusableComponents/SuccessAlertComponent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import styles from "./Styles/PlanTripStyle.module.css";
import StartingPointDialog from "./StartingPointDialog";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TripAPI from "../../Services/TripServices/TripAPI";

const driverLicenseRegExp = /^\d{8}$/;
const tripDateRegExp = /^\d{4}-\d{2}-\d{2}$/;
const threeDaysInMs = 259200000;
const twoMonthsInMs = 5184000000;
const theme = createTheme({
  palette: {
    background: {
      default: "#F0F0F0",
    },
  },
});

const PlanningComponent = () => {
  const navigate = useNavigate("");
  var isValid = useUserValidation();
  const [alertErrorOpen, setAlertErrorOpen] = useState(false);
  const [alertSuccessOpen, setAlertSuccessOpen] = useState(false);
  const [errorAlertText, setErrorAlertText] = useState("Error");
  const [successAlertText, setSuccessAlertText] = useState("Success");
  const [tripDate, setTripDate] = useState("");
  const [price, setPrice] = useState("");
  const [seats, setSeats] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [startingPoint, setStartingPoint] = useState("");
  const [destination, setDestination] = useState("");

  const handleClick = () => {
    if (
      tripDate.match(tripDateRegExp) &&
      price > 0 &&
      seats > 0 &&
      seats <= getSeatNumber(vehicleType) &&
      sessionStorage.getItem("SLatitude") != null &&
      sessionStorage.getItem("SLongitude") != null &&
      sessionStorage.getItem("DLatitude") != null &&
      sessionStorage.getItem("DLongitude") != null &&
      sessionStorage.getItem("start") != null &&
      sessionStorage.getItem("dest") != null
    ) {
      TripAPI.addTrip(
        sessionStorage.getItem("SLatitude"),
        sessionStorage.getItem("SLongitude"),
        sessionStorage.getItem("DLatitude"),
        sessionStorage.getItem("DLongitude"),
        sessionStorage.getItem("start"),
        sessionStorage.getItem("dest"),
        price,
        seats,
        tripDate
      )
        .then((res) => {
          setSuccessAlertText("You have created trip succesfully!");
          setAlertSuccessOpen(true);
        })
        .catch((err) => {
          setErrorAlertText("Server refused your request!");
          setAlertErrorOpen(true);
        });
    } else {
      setErrorAlertText("You have to fill in all the fields!");
      setAlertErrorOpen(true);
    }
  };

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
        setErrorAlertText("Server error! Please comeback later!");
        setAlertErrorOpen(true);
      });
    if (
      sessionStorage.getItem("SLatitude") != null &&
      sessionStorage.getItem("SLongitude") != null &&
      sessionStorage.getItem("DLatitude") != null &&
      sessionStorage.getItem("DLongitude") != null &&
      sessionStorage.getItem("start") != null &&
      sessionStorage.getItem("dest") != null
    ) {
      setStartingPoint(sessionStorage.getItem("start"));
      setDestination(sessionStorage.getItem("dest"));
    } else {
      sessionStorage.clear();
    }
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

  ValidatorForm.addValidationRule("empty", (value) => {
    if (value.length > 0) {
      return true;
    }
    return false;
  });

  ValidatorForm.addValidationRule("tripDatePast", (value) => {
    var inputDate = new Date(value);
    var today = new Date();
    if (value.match(tripDateRegExp) && today.getTime() < inputDate.getTime()) {
      return true;
    }
    return false;
  });

  ValidatorForm.addValidationRule("tripDateRegEx", (value) => {
    if (value.match(tripDateRegExp)) {
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
            validators={[
              "tripDateRegEx",
              "tripDatePast",
              "tripDateClose",
              "tripDateLong",
            ]}
            errorMessages={[
              "Trip Date should match format mm/dd/yyyy",
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
          <TextValidator
            margin="normal"
            fullWidth
            id="seats"
            label="Starting Point"
            name="seats"
            validators={["empty"]}
            errorMessages={["Starting Point should not be empty"]}
            value={startingPoint}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextValidator
            margin="normal"
            fullWidth
            id="seats"
            label="Destination"
            name="seats"
            validators={["empty"]}
            errorMessages={["Destination should not be empty"]}
            value={destination}
            InputProps={{
              readOnly: true,
            }}
          />

          <div
            style={{
              justifyContent: "center",
              display: "flex",
              marginTop: "10%",
            }}
          >
            <StartingPointDialog
              text="Select Trip Route"
              setStartingPoint={setStartingPoint}
              setDestination={setDestination}
            />
          </div>

          <div
            style={{
              justifyContent: "center",
              display: "flex",
              marginTop: "10%",
            }}
          >
            <Button
              type="submit"
              className={styles.createButton}
              variant="outlined"
              onClick={handleClick}
            >
              CREATE
            </Button>
          </div>
        </ValidatorForm>
      </Box>
      <FooterComponent />
    </ThemeProvider>
  );
};

export default PlanningComponent;
