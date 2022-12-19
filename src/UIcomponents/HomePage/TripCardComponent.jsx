import { React, useState } from "react";
import { Card, Grid } from "@material-ui/core";
import StartVisitIcon from "../../Images/Icons/start_visit.png";
import DestinationVisitIcon from "../../Images/Icons/destination_visit.png";
import GreenSeat from "../../Images/Icons/green_seat.png";
import BlackSeat from "../../Images/Icons/black_seat.png";
import Driver from "../../Images/Icons/driver.png";
import styles from "./Styles/HomePageTripsComponentStyle.module.css";
import Button from "mui-button";
import TripAPI from "../../Services/TripServices/TripAPI";

const TripCardComponent = (trip) => {
  const [showJoinButton, setShowJoinButton] = useState(true);

  const seats = [];
  for (let i = 1; i <= trip.trip.occupied; i++) {
    if (i == 7) {
      seats.push(<img src={BlackSeat} className={styles.seatIcon}></img>);
      <div className={styles.break}></div>;
    } else {
      seats.push(<img src={BlackSeat} className={styles.seatIcon}></img>);
    }
  }
  for (let i = 1; i <= trip.trip.seats - trip.trip.occupied; i++) {
    seats.push(
      <img src={GreenSeat} alt="sveiki" className={styles.seatIcon}></img>
    );
  }

  const handleJoin = () => {
    TripAPI.addUserToTrip(trip.trip.id);
    window.location.reload(false);
    setShowJoinButton(false);
  };

  var dateArr = trip.trip.tripDate.split("T");
  var timeArr = dateArr[1].split(":");

  return (
    <Card elevation={2} className={styles.card}>
      <Grid container className={styles.top_container}>
        <Grid item xs={12} md={10} className={styles.locations_container}>
          <div className={styles.driver_icon_container}>
            <img src={Driver} className={styles.driver_icon}></img>
            <p className={styles.driver_initials}>
              {trip.trip.driverName} {trip.trip.driverSurname}
            </p>
          </div>
        </Grid>

        <Grid item xs={12} md={2} className={styles.info_container}>
          <p className={styles.date}>
            {dateArr[0]} {timeArr[0]}:{timeArr[1]}
          </p>
        </Grid>
      </Grid>

      <Grid container className={styles.middle_container}>
        <Grid item md={10}>
          <div className={styles.point_div}>
            <img src={StartVisitIcon} className={styles.visitIcon}></img>
            <p className={styles.point_text}>{trip.trip.startingPoint}</p>
          </div>
          <div className={styles.point_div}>
            <img src={DestinationVisitIcon} className={styles.visitIcon}></img>
            <p className={styles.point_text}>{trip.trip.destination}</p>
          </div>
        </Grid>
        <Grid item md={2}>
          <div className={styles.car_info_container}>{seats}</div>
          <div className={styles.price_container}>
            <p className={styles.est_price_text}>est. price:</p>
            <p className={styles.price}>{trip.trip.estimatedTripPrice}</p>
            <p className={styles.euro_sign}>€</p>
          </div>
          <div className={styles.button_container}>
            {showJoinButton == true ? (
              <Button className={styles.join_button} onClick={handleJoin}>
                Join!
              </Button>
            ) : (
              <Button
                className={styles.joined_button}
                onClick={handleJoin}
                disabled={true}
              >
                Joined ! ✔️
              </Button>
            )}
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};
export default TripCardComponent;
