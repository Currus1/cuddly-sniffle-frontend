import React, { useMemo, useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "./Styles/GoogleMapsStyle.css";
import SecretAPI from "../../Services/SecretServices.js";
import GoogleAutoComplete from "./GoogleAutoComplete.jsx";
import { backgroundStyle } from "../Styles/BackgroundStyle";
import HeaderComponent from "../BaseHeader/HeaderComponent";
import FooterComponent from "../BaseFooter/FooterComponent";
const useMapsApiKey = () => {
  const [key, setKey] = useState(undefined);

  useEffect(() => {
    const getKey = async () => {
      let res = await SecretAPI.getGoogleTripApiKey();
      setKey(res.data);
    };
    getKey();
  }, []);

  return key;
};

export default function GoogleMapsComponent() {
  const key = useMapsApiKey();

  if (!key) return null;

  return (
    <div style={backgroundStyle}>
      <HeaderComponent />
      <div className="split-screen">
        <div className="top-pane">
          <MapLoader apiKey={key} />
        </div>
        <div className="bottom-pane">
          <div>
            <label>From</label>
            <GoogleAutoComplete></GoogleAutoComplete>
          </div>
          <br />
          <div>
            <label>Where</label>
            <GoogleAutoComplete></GoogleAutoComplete>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

const MapLoader = ({ apiKey }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
};

function Map() {
  const center = useMemo(() => ({ lat: 54.689461, lng: 25.27986 }), []);
  return (
    <GoogleMap zoom={14} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}
