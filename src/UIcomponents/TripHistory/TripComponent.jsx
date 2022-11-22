import React, { useState, useEffect } from "react";
import TripAPI from "../../Services/TripServices/TripAPI.js";
import TripView from "./TripView";
import "../Styles/PageStyle.css";
import FooterComponent from "../BaseFooter/FooterComponent.jsx";
import HeaderComponent from "../BaseHeader/HeaderComponent.jsx";
import { backgroundStyle } from "../Styles/BackgroundStyle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Container } from "@mui/material";
import styles from "./Styles/TripHistoryStyle.module.css";

const TripComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    TripAPI.getAllTripsByUserId(19).then((res) => setData(res.data)); // Fixed number
  }, []);

  return (
    <div
      style={{ ...backgroundStyle, display: "flex", flexDirection: "column" }}
    >
      <HeaderComponent />
      <Container className={styles.flex}>
        <h1 className={styles.h1}>Trip History</h1>
        <List className={styles.list}>
          {data.length > 0 ? (
            data.map((trip) => (
              <ListItem>
                <TripView
                  dest={trip.destination}
                  price={trip.estimatedTripPrice}
                ></TripView>
              </ListItem>
            ))
          ) : (
            <div className={styles.text_center}>
              <h2>You have no trips yet</h2>
              <h3>
                <a className={styles.a} href="/trips">
                  Join a trip now
                </a>
              </h3>
            </div>
          )}
        </List>
      </Container>
      <FooterComponent />
    </div>
  );
};

export default TripComponent;
