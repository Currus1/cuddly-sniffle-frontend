import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanningComponent from "./UIcomponents/TripPlanning/PlanningComponent";
import HomePageComponent from "./UIcomponents/HomePage/HomePageComponent.jsx";
import GoogleMapsComponent from "./UIcomponents/GoogleMapIntegration/GoogleMapsComponent";
import ProfileComponent from "./UIcomponents/Profile/ProfileComponent";
import RegisterComponent from "./UIcomponents/Registry/RegisterComponent";
import LandingPageComponent from "./UIcomponents/LandingPage/LandingPageComponent";
import LoginComponent from "./UIcomponents/Login/LoginComponent"

function App() {
  return (
    <div className="CurrusApp">
      <BrowserRouter>
        <Routes>
          <Route path="/trips/history" element={<HomePageComponent />} />
          <Route path="/planning" element={<PlanningComponent />} />
          <Route path="/home" element={<HomePageComponent />} />
          <Route path="/maps" element={<GoogleMapsComponent />} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/" element={<LandingPageComponent />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
