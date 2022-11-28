import React, { useEffect, useState } from "react";
import TripAPI from "../../Services/TripServices/TripAPI.js";
import { Container, Grid, Paper, Button } from "@material-ui/core";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import styles from "./Styles/TripStyle.module.css";
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
            <h1 className={styles.titleHeaderStyle}>Currus Trips</h1>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper elevation={10}>
              <Grid className={styles.menuPaperStyle} align="left">
                <h2 className={styles.menuHeaderStyle}>Choose trips:</h2>
                <FormControl fullWidth>
                  <InputLabel id="statusId" className={styles.menuMarginStyle}>
                    Status
                  </InputLabel>
                  <Select
                    labelId="statusId"
                    id="select"
                    value={tripStatus}
                    label="Status:"
                    onChange={handleTripStatusChange}
                    className={styles.menuMarginStyle}
                  >
                    {tripStatuses.map((type) => (
                      <MenuItem value={type}>{type}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button
                  onClick={loadClicked}
                  variant="contained"
                  className={styles.buttonStyle}
                >
                  Load Trips
                </Button>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper elevation={10}>
              <Grid container spacing={3} className={styles.listPaperStyle} align="left">
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
