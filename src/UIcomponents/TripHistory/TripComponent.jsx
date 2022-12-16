import React, { useState, useEffect } from "react";
import TripAPI from "../../Services/TripServices/TripAPI.js";
import TripView from "./TripView";
import FooterComponent from "../BaseFooter/FooterComponent.jsx";
import HeaderComponent from "../BaseHeader/HeaderComponent.jsx";
import backgroundStyle from "../Styles/BackgroundStyle.module.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Container } from "@mui/material";
import styles from "./Styles/TripHistoryStyle.module.css";
import { useUserValidation } from "../../CustomHooks/useUserValidation.js";
import { useNavigate } from "react-router-dom";
import "./Styles/TripHistoryStyle.module.css";
import { useRef } from "react";

const TripComponent = () => {
  const navigate = useNavigate("");
  const [data, setData] = useState([]);
  var isValid = useUserValidation();
  const [alertErrorOpen, setAlertErrorOpen] = useState(false);
  const [alertSuccessOpen, setAlertSuccessOpen] = useState(false);
  const [errorAlertText, setErrorAlertText] = useState("Error");
  const [successAlertText, setSuccessAlertText] = useState("Success");

  useEffect(() => {
    if (!isValid) {
      navigate("/");
    }
    const fetchData = async () => {
      try {
        await TripAPI.getAllTripsByUserId().then((res) => setData(res.data));
      } catch (error) {
        setErrorAlertText("Server failed loading the data!");
        setAlertErrorOpen(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className={styles.bg}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <HeaderComponent />
      {alertErrorOpen == true ? (
        <ErrorAlertComponent text={errorAlertText} />
      ) : null}
      {alertSuccessOpen == true ? (
        <SuccessAlertComponent text={successAlertText} />
      ) : null}
      <Container className={styles.flex}>
        <h1 className={styles.h1}>Trip History</h1>
        <List className={styles.list}>
          {data.length > 0 ? (
            data.map((trip) => <TripView key={trip.id} trip={trip}></TripView>)
          ) : (
            <div className={styles.text_center}>
              <h2>You have no trips yet</h2>
              <h3>
                <a className={styles.a} href="/home">
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
