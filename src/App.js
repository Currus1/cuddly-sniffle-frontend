import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./UIcomponents/HeaderComponent";
import FooterComponent from "./UIcomponents/FooterComponent";
import UserComponent from "./UIcomponents/UserComponent";
import TripComponent from "./UIcomponents/TripComponent"
import GoogleMapsComponent from "./UIcomponents/GoogleMapsComponent";

function App() {
  return (
    <div className="CurrusApp">
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          <Route path="/user" element={<UserComponent />} />
          <Route path="/trips/history" element={<TripComponent />} />
          <Route path="/maps" element={<GoogleMapsComponent />} />
        </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;
