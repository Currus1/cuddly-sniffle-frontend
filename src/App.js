import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PlanningComponent from "./UIcomponents/TripPlanning/PlanningComponent";
import GoogleMapsComponent from "./UIcomponents/GoogleMapIntegration/GoogleMapsComponent";
import ProfileComponent from "./UIcomponents/Profile/ProfileComponent";
import RegisterComponent from "./UIcomponents/Registry/RegisterComponent";
import HomePageComponent from "./UIcomponents/LandingPage/HomePageComponent";

function App() {
  return (
    <div className="CurrusApp">
      <BrowserRouter>
        <Routes>
          <Route path="/planning" element={<PlanningComponent />} />
          <Route path="/maps" element={<GoogleMapsComponent />} />
          <Route path="/profile" element={<ProfileComponent />}/>
          <Route path="/register" element={<RegisterComponent />}/>
          <Route path="/" element={<HomePageComponent/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
