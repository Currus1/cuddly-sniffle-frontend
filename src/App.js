import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanningComponent from "./UIcomponents/TripPlanning/PlanningComponent";
import HomePageComponent from "./UIcomponents/HomePage/HomePageComponent.jsx";
import GoogleMapsComponent from "./UIcomponents/GoogleMapIntegration/GoogleMapsComponent";
import ProfileComponent from "./UIcomponents/Profile/ProfileComponent";
import RegisterComponent from "./UIcomponents/Registry/RegisterComponent";
import LandingPageComponent from "./UIcomponents/LandingPage/LandingPageComponent";
import LoginComponent from "./UIcomponents/Login/LoginComponent"
import ErrorAlertComponent from "./UIcomponents/ReusableComponents/ErrorAlertComponent"
import TripComponent from "./UIcomponents/TripHistory/TripComponent"

function App() {
  return (
    <div className="CurrusApp">
      <BrowserRouter>
        <Routes>
          <Route path="/trips/history" element={<TripComponent />} />
          <Route path="/planning" element={<PlanningComponent />} />
          <Route path="/home" element={<HomePageComponent />} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/" element={<LandingPageComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/*" element={<ErrorAlertComponent text={"This page does not exist! "} wrongPage={true}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
