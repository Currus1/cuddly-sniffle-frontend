import React, { useMemo, useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "./styles/GoogleMapsStyle.css";
import SecretAPI from "../Services/SecretServices.js";

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

  return <MapLoader apiKey={key} />;
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
