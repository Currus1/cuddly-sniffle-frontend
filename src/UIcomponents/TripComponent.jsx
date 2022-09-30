import React, { useState, useEffect } from "react";
import "../bootstrap.css";
import TripAPI from "../TripServices/TripAPI.js";

const TripComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    TripAPI.getOngoingTrips().then((res) => setData(res.data));
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <table
          className="container table table-dark"
          style={{ width: "400px" }}
        >
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Trip Beginning</th>
              <th scope="col">Estimated Duration</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ongoingTrip) => (
              <tr key={ongoingTrip}>
                <td>{ongoingTrip.id}</td>
                <td>{ongoingTrip.tripStart}</td>
                <td>{ongoingTrip.duration} (min)</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TripComponent;
