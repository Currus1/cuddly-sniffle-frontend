import React, { useEffect, useState } from "react";
import "../bootstrap.css";
import "../App.css";
import UserAPI from "../UserServices/UserAPI.js";
import DriverAPI from "../DriverServices/DriverAPI.js";

const PlanningComponent = () => {
  const [drivers, setDrivers] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [driver, setDriver] = useState("");

  useEffect(() => {
    UserAPI.getAllUsers().then((response) => setUsers(response.data));
    DriverAPI.GetAllDrivers().then((res) => setDrivers(res.data));
  }, []);

  const handleDriverChange = (event) => {
    setDriver(event.target.value);
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  function SaveClicked() {
    document.getElementById("ROuser").value = user;
    document.getElementById("ROdriver").value = driver;
    document.getElementById("ROstartingPoint").value =
      document.getElementById("startingPoint").value;
    document.getElementById("ROdestination").value =
      document.getElementById("destination").value;
    //Calculate the trip time
    document.getElementById("ROestimatedTime").value = "10";
  }

  function PlanClicked() {
    if (
      document.getElementById("ROuser").value != "" &&
      document.getElementById("ROdriver").value != "" &&
      document.getElementById("ROstartingPoint").value != "" &&
      document.getElementById("ROdestination").value != "" &&
      document.getElementById("ROestimatedTime").value != ""
    ) {
      // Register the trip here
      console.log("Registered");
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
                          <label>User</label>
                        </td>
                        <td>
                          <select
                            style={{ width: "200px" }}
                            value={user}
                            onChange={handleUserChange}
                          >
                            {users.map((user) => (
                              <option value={user.Name}>{user.Name}</option>
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
                              <option value={driver.Name}>{driver.Name}</option>
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
