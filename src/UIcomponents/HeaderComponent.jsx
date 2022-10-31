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
    </nav>
  </header>
);

export default HeaderComponent;
