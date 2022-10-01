import React from "react";
import { Link } from "react-router-dom";
import "../bootstrap.css";

const HeaderComponent = () => (
  <header>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="navbar-item" style={{ color: "white" }}>
        CURRUS
      </div>
      <ul className="navbar-nav navbar-collapse justify-content-end">
        <li className="nav-link">
          <Link to={"/planning"}>Plan a trip</Link>
        </li>
        <li className="nav-link">
          <Link to={"/backend"}>Backend</Link>
        </li>
        <li className="nav-link">
          <Link to={"/user"}>User</Link>
        </li>
        <li className="nav-link">
          <Link to={"/driver"}>Driver</Link>
        </li>
        <li className="nav-link">Login</li>
        <li className="nav-link">Logout</li>
      </ul>
    </nav>
  </header>
);

export default HeaderComponent;
