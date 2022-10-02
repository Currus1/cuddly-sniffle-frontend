import React, { useEffect, useState } from "react";
import "../bootstrap.css";
import "../App.css";
import "./styles/UserStyle.css";
import UserAPI from "../UserServices/UserAPI";

const UserComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    UserAPI.getAllUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));

    console.log(users);
  }

  function saveUser() {
    UserAPI.addUser(
      users.Name,
      users.Surname,
      users.Birthdate,
      users.Email,
      users.Phone
    );
  }

  function saveClicked() {
    if (
      document.getElementById("Name").value !== "" &&
      document.getElementById("Surname").value !== "" &&
      document.getElementById("Birthdate").value !== "" &&
      document.getElementById("Email").value !== "" &&
      document.getElementById("Phone").value !== ""
    ) {
      users.Name = document.getElementById("Name").value;
      users.Surname = document.getElementById("Surname").value;
      users.Birthdate = document.getElementById("Birthdate").value;
      users.Email = document.getElementById("Email").value;
      users.Phone = document.getElementById("Phone").value;

      saveUser();
      console.log("Registered");
    } else {
      alert("Please make sure to enter all the fields");
    }
  }

  function loadClicked() {
    loadUsers();
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
            onClick={saveClicked}
            style={{ margin: "10px 10px" }}
            className="button-save"
          >
            Save
          </button>
          <button
            onClick={loadClicked}
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
            {users.map((user) => (
              <tr key={user}>
                <td className="userData">{user.Name}</td>
                <td className="userData">{user.Surname}</td>
                <td className="userData">{user.Birthdate}</td>
                <td className="userData">{user.Email}</td>
                <td className="userData">{user.Phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserComponent;
