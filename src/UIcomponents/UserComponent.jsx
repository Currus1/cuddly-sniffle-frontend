import React, { useState } from "react";
import "../bootstrap.css";
import "../App.css";
import "./styles/UserStyle.css";
import UserAPI from "../UserServices/UserAPI";
import axios from "axios";

const UserComponent = () => {
  const [data, setData] = useState([]);

  function SaveClicked() {
    if (
      document.getElementById("Name").value != "" &&
      document.getElementById("Surname").value != "" &&
      document.getElementById("Birthdate").value != "" &&
      document.getElementById("Email").value != "" &&
      document.getElementById("Phone").value != ""
    ) {
      data.Name = document.getElementById("Name").value;
      data.Surname = document.getElementById("Surname").value;
      data.Birthdate = document.getElementById("Birthdate").value;
      data.Email = document.getElementById("Email").value;
      data.Phone = document.getElementById("Phone").value;

      UserAPI.addUser(
        data.Name,
        data.Surname,
        data.Birthdate,
        data.Email,
        data.Phone
      );
      console.log("Registered");
    } else {
      alert("Please make sure to enter all the fields");
    }
  }

  function LoadClicked() {
    UserAPI.getAllUsers()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

    console.log(data);
  }

  return (
    <>
      <div className="userInputContainer">
        <h3 className="tableName">User Data</h3>
        <table className="inputTable">
          <tbody>
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
                <input className="input" type="text" id="Phone" />
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
              <th className="userTableName headerData">Name</th>
              <th className="userTableName headerData">Surname</th>
              <th className="userTableBirthdate headerData">Birthdate</th>
              <th className="userTableEmail headerData">Email</th>
              <th children="userTablePhone headerData">Phone Number</th>
            </tr>
          </thead>
          <tbody className="userTableBody">
            {data.map((item) => (
              <tr key={item}>
                <td className="userData">{item.Name}</td>
                <td className="userData">{item.Surname}</td>
                <td className="userData">{item.Birthdate}</td>
                <td className="userData">{item.Email}</td>
                <td className="userData">{item.Phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserComponent;
