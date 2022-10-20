import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./UIcomponents/HeaderComponent";
import FooterComponent from "./UIcomponents/FooterComponent";
import PlanningComponent from "./UIcomponents/PlanningComponent";
import UserComponent from "./UIcomponents/UserComponent";
import DriverComponent from "./UIcomponents/DriverComponent";
import TripComponent from "./UIcomponents/TripComponent"
import GoogleMapsComponent from "./UIcomponents/GoogleMapsComponent";
import ProfileComponent from "./UIcomponents/ProfileComponent";

function App() {
  return (
    <div className="CurrusApp">
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          <Route path="/planning" element={<PlanningComponent />} />
          <Route path="/user" element={<UserComponent />} />
          <Route path="/driver" element={<DriverComponent />} />
          <Route path="/trip" element={<TripComponent />} />
          <Route path="/maps" element={<GoogleMapsComponent />} />
          <Route path="/profle" element={<ProfileComponent />}/>
        </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;
