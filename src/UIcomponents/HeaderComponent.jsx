import React from "react";
import "../bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import "./styles/DropdownStyle.css";
const HeaderComponent = () => (
  <header>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="navbar-item" style={{ color: "white" }}>
        CURRUS
      </div>
      <ul className="navbar-nav navbar-collapse justify-content-end">
        <Dropdown>
          <Dropdown.Toggle className="dropdown" id="dropdown">
            Actions
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu">
            <Dropdown.Item className="dropdown-item" href="/trip">
              Ongoing trips
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" href="/user">
              Users
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" href="/driver">
              Drivers
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" href="/trip">
              All Trips
            </Dropdown.Item>
            <Dropdown.Divider></Dropdown.Divider>
            <Dropdown.Item className="dropdown-item" href="/planning">
              Plan a trip
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ul>
    </nav>
  </header>
);

export default HeaderComponent;
