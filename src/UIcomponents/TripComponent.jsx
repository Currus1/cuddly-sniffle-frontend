import React, { useState, useEffect } from "react";
import "../bootstrap.css";
import TripAPI from "../TripServices/TripAPI.js";
import TripView from "./TripView";

const TripComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    TripAPI.getAllTripsByUserId(19).then((res) => setData(res.data)); // Fixed number
  }, []);

  return (
    <div>
      {data.map((trip) => (
        <TripView
          id={trip.id}
          dest={trip.destination}
          price={trip.estimatedTripPrice}
        ></TripView>
      ))}
    </div>
  );
};

export default TripComponent;
