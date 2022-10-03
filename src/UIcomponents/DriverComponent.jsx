import React, { useState, useEffect } from "react";
import "../bootstrap.css";
import "../App.css";
import "./styles/DriverStyle.css";
import DriverAPI from "../DriverServices/DriverAPI";

const DriverComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadTable();
  }, []); // initializing the table on load (once)

  function loadTable() {
    DriverAPI.GetAllDrivers()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }

  function SaveClicked() {
    if (
      document.getElementById("Id").value !== "" &&
      document.getElementById("Name").value !== "" &&
      document.getElementById("Surname").value !== "" &&
      document.getElementById("Birthdate").value !== "" &&
      document.getElementById("Email").value !== "" &&
      document.getElementById("PhoneNumber").value !== ""
    ) {
      data.Id = document.getElementById("Id").value;
      data.Name = document.getElementById("Name").value;
      data.Surname = document.getElementById("Surname").value;
      data.Birthdate = document.getElementById("Birthdate").value;
      data.Email = document.getElementById("Email").value;
      data.PhoneNumber = document.getElementById("PhoneNumber").value;
      data.VehicleType = document.getElementById("VehicleType").value;
      data.LicenseNumber = document.getElementById("LicenseNumber").value;

      DriverAPI.AddingDriver(
        data.Id,
        data.Name,
        data.Surname,
        data.Birthdate,
        data.Email,
        data.PhoneNumber,
        data.VehicleType,
        data.LicenseNumber
      );
      console.log("Registered");
    } else {
      alert("Please make sure to enter all the fields");
    }
  }

  // Load the drivers to data const via useState
  function LoadClicked() {
    loadTable();
  }

  return (
    <>
      <div className="userInputContainer">
        <h3 className="tableName">Driver Data</h3>
        <table className="inputTable">
          <tbody>
            <tr>
              <td className="inputLabel">
                <label>Id:</label>
              </td>
              <td>
                <input className="input" type="text" id="Id" />
              </td>
            </tr>
            <tr>
              <td className="inputLabel">
                <label>Name:</label>
              </td>
              <td>
                <input className="input" type="text" id="Name" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Surname:</label>
              </td>
              <td>
                <input className="input" type="text" id="Surname" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Birthdate:</label>
              </td>
              <td>
                <input className="input" type="date" id="Birthdate" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <input className="input" type="email" id="Email" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Phone Number:</label>
              </td>
              <td>
                <input className="input" type="text" id="PhoneNumber" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Vehicle Type:</label>
              </td>
              <td>
                <input className="input" type="text" id="VehicleType" />
              </td>
            </tr>
            <tr>
              <td>
                <label>License Number:</label>
              </td>
              <td>
                <input className="input" type="text" id="LicenseNumber" />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button
            onClick={SaveClicked}
            style={{ margin: "10px 10px" }}
            className="button-save"
          >
            Save
          </button>
          <button
            onClick={LoadClicked}
            style={{ margin: "10px 10px" }}
            className="button-planning"
          >
            Load
          </button>
        </div>
      </div>
      <div className="userContainer">
        <table className="userTable">
          <thead className="userHeader">
            <tr>
              <th className="userTableName headerData">Id</th>
              <th className="userTableName headerData">Name</th>
              <th className="userTableName headerData">Surname</th>
              <th className="userTableBirthday headerData">Birthdate</th>
              <th className="userTableEmail headerData">Email</th>
              <th children="userTablePhoneNumber headerData">Phone Number</th>
              <th children="userVehicleType headerData">Vehicle Type</th>
              <th children="userLicenseNumber headerData">License Number</th>
            </tr>
          </thead>
          <tbody className="userTableBody">
            {data.map((item) => (
              <tr key={item}>
                <td className="userData">{item.Id}</td>
                <td className="userData">{item.Name}</td>
                <td className="userData">{item.Surname}</td>
                <td className="userData">{item.Birthdate}</td>
                <td className="userData">{item.Email}</td>
                <td className="userData">{item.PhoneNumber}</td>
                <td className="userData">{item.VehicleType}</td>
                <td className="userData">{item.LicenseNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DriverComponent;
