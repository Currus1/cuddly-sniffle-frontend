import React, { useEffect, useState } from "react";
import TripAPI from "../../TripServices/TripAPI";
import { Container, Grid, Paper, Button } from "@material-ui/core";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./Styles/TripsStyle.css";
import {
  menuPaperStyle,
  menuMarginStyle,
  listPaperStyle,
  titleHeaderStyle,
  menuHeaderStyle,
  buttonStyle,
} from "./Styles/TripsStyle.js";
import TripCardComponent from "./TripCardComponent.jsx";

const TripListComponent = () => {
  const [tripStatus, setTripStatus] = useState("");
  const [tripStatuses, setTripStatuses] = useState([]);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    TripAPI.getTripStatuses().then((response) =>
      setTripStatuses(response.data)
    );
    setTripStatus("Planned");
    loadTrips("Planned");
  }, []);

  const handleTripStatusChange = (event) => {
    setTripStatus(event.target.value);
  };

  const loadTrips = (status) => {
    TripAPI.getTrips(status)
      .then((res) => setTrips(res.data))
      .catch((err) => console.log(err));
    console.log(trips);
  };

  const loadClicked = () => {
    if (tripStatus !== "") {
      loadTrips(tripStatus);
    } else {
      alert("Empty Field!");
    }
  };

  return (
    <div>
      <Container>
        <Grid
          container
          spacing={10}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={12} md={12} lg={12}>
            <h1 style={titleHeaderStyle}>Currus Trips</h1>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper elevation={10}>
              <Grid style={menuPaperStyle} align="left">
                <h2 style={menuHeaderStyle}>Choose trips:</h2>
                <FormControl fullWidth>
                  <InputLabel id="statusId" style={menuMarginStyle}>
                    Status
                  </InputLabel>
                  <Select
                    labelId="statusId"
                    id="select"
                    value={tripStatus}
                    label="Status:"
                    onChange={handleTripStatusChange}
                    style={menuMarginStyle}
                  >
                    {tripStatuses.map((type) => (
                      <MenuItem value={type}>{type}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button
                  onClick={loadClicked}
                  variant="contained"
                  style={buttonStyle}
                >
                  Load Trips
                </Button>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper elevation={10}>
              <Grid container spacing={3} style={listPaperStyle} align="left">
                {trips.map((trip) => (
                  <Grid item key={trip.id} xs={12} md={12} lg={12}>
                    <TripCardComponent trip={trip}></TripCardComponent>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TripListComponent;
