import React, { useEffect, useState } from "react";
import "../bootstrap.css";
import "../App.css";
import UserAPI from "../UserServices/UserAPI.js";
import DriverAPI from "../DriverServices/DriverAPI.js";
import TripAPI from "../TripServices/TripAPI";

const PlanningComponent = () => {
  const [data, setData] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [driver, setDriver] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleTypes, setVehicleTypes] = useState([]);

  useEffect(() => {
    UserAPI.getAllUsers().then((response) => setUsers(response.data));
    DriverAPI.GetAllDrivers().then((response) => setDrivers(response.data));
    TripAPI.getVehicleTypeEnum().then((response) =>
      setVehicleTypes(response.data)
    );
    setVehicleType("Sedan"); // Initial value for select
  }, []);

  const handleDriverChange = (event) => {
    setDriver(event.target.value);
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
  };

  function SaveClicked() {
    document.getElementById("ROid").value = document.getElementById("id").value;
    document.getElementById("ROuser").value = user;
    document.getElementById("ROdriver").value = driver;
    document.getElementById("ROstartingPoint").value =
      document.getElementById("startingPoint").value;
    document.getElementById("ROdestination").value =
      document.getElementById("destination").value;
    //Calculate the trip time
    document.getElementById("ROestimatedTime").value = "10";
  }

  function ValidateFields() {
    if (
      document.getElementById("ROid").value != "" &&
      document.getElementById("ROuser").value != "" &&
      document.getElementById("ROdriver").value != "" &&
      document.getElementById("ROstartingPoint").value != "" &&
      document.getElementById("ROdestination").value != "" &&
      document.getElementById("ROestimatedTime").value != ""
    ) {
      return true;
    }
    return false;
  }

  function SaveValues() {
    data.Id = document.getElementById("ROid").value;
    data.DriverId = document.getElementById("ROdriver").value;
    data.UserId = document.getElementById("ROuser").value;
    data.StartingPoint = document.getElementById("ROstartingPoint").value;
    data.Destination = document.getElementById("ROdestination").value;
    data.Seats = "4";
    data.Hours = "1";
    data.Minutes = "10";
    data.EstimatedTripPrice = document.getElementById("ROestimatedTime").value;
  }

  function clearFields() {
    console.log("clear");
  }

  function PlanClicked() {
    if (ValidateFields()) {
      SaveValues();
      if (TripAPI.addTrip(data)) alert("Trip is added");
      else alert("Server failed to add your trip");
      clearFields();
    } else {
      alert("Please make sure to enter all the fields");
    }
  }

  return (
    <>
      <div style={{ textAlign: "center", padding: 10 }}>
        <button onClick={PlanClicked} className="button-planning">
          Plan
        </button>
        <div style={{ padding: 20 }}>
          <table style={{ margin: "auto" }}>
            <tbody>
              <tr>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <label>Trip No.</label>
                        </td>
                        <td>
                          <input className="form-control" type="text" id="id" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>User</label>
                        </td>
                        <td>
                          <select
                            style={{ width: "200px" }}
                            value={user}
                            onChange={handleUserChange}
                          >
                            {users.map((user) => (
                              <option value={user.Id}>{user.Id}</option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Vehicle type</label>
                        </td>
                        <td>
                          <select
                            style={{ width: "200px" }}
                            value={vehicleType}
                            onChange={handleVehicleTypeChange}
                          >
                            {vehicleTypes.map((type) => (
                              <option value={type}>{type}</option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Driver</label>
                        </td>
                        <td>
                          <select
                            style={{ width: "200px" }}
                            value={driver}
                            onChange={handleDriverChange}
                          >
                            {drivers.map((driver) => (
                              <option value={driver.Id}>{driver.Id}</option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Starting Point</label>
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            id="startingPoint"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Destination</label>
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            id="destination"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <label>Trip No.</label>
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            id="ROid"
                            readOnly
                            placeholder="..."
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>User</label>
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            id="ROuser"
                            readOnly
                            placeholder="..."
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Driver</label>
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            id="ROdriver"
                            readOnly
                            placeholder="..."
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Starting Point</label>
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            id="ROstartingPoint"
                            readOnly
                            placeholder="..."
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Destination</label>
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            id="ROdestination"
                            readOnly
                            placeholder="..."
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right" }}>
                  <label>Estimated Time</label>
                </td>
                <td>
                  <input
                    className="form-control"
                    type="text"
                    id="ROestimatedTime"
                    readOnly
                    placeholder="..."
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button onClick={SaveClicked} className="button-save">
          Save
        </button>
      </div>
    </>
  );
};

export default PlanningComponent;
