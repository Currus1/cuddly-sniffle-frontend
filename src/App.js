import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TripComponent from "./UIcomponents/TripHistory/TripComponent"
import PlanningComponent from "./UIcomponents/TripPlanning/PlanningComponent";
import TripsComponent from "./UIcomponents/Trips/TripsComponent";
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
          <Route path="/trips/history" element={<TripComponent />} />
          <Route path="/planning" element={<PlanningComponent />} />
          <Route path="/home" element={<TripsComponent />} />
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
