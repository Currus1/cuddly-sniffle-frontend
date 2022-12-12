import styles from "./Styles/HomePageTripsComponentStyle.module.css";
import React, { useEffect, useState } from "react";
import TripAPI from "../../Services/TripServices/TripAPI.js";
import { Container, Grid, Paper } from "@material-ui/core";
import TripCardComponent from "./TripCardComponent.jsx";

export default function HomePageTripsComponent() {
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
    <div className={styles.container}>
      <Container>
        <Grid
          container
          spacing={10}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={12} md={12} lg={12}>
            <Paper elevation={2}>
              <Grid
                container
                spacing={3}
                className={styles.listPaperStyle}
                align="left"
              >
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
}
