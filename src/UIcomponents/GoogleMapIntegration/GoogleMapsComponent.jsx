import React, { useMemo, useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import SecretAPI from "../../Services/SecretServices/SecretServices.js";
import GoogleAutoComplete from "./GoogleAutoComplete.jsx";
import backgroundStyle from "../Styles/BackgroundStyle.module.css";
import HeaderComponent from "../BaseHeader/HeaderComponent";
import FooterComponent from "../BaseFooter/FooterComponent";
import styles from "./Styles/GoogleMapsStyle.module.css";
import { useNavigate } from "react-router-dom";
import { useUserValidation } from "../../CustomHooks/useUserValidation.js";

const useMapsApiKey = () => {
  const [key, setKey] = useState(undefined);
  const navigate = useNavigate("");
  var isValid = useUserValidation();

  useEffect(() => {
    if (!isValid) {
      navigate("/");
    }
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
    <div className={backgroundStyle.bg}>
      <HeaderComponent />
      <div className={styles.split_screen}>
        <div className={styles.top_pane}>
          <MapLoader apiKey={key} />
        </div>
        <div className={styles.bottom_pane}>
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
    <GoogleMap
      zoom={14}
      center={center}
      mapContainerClassName={styles.map_container}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
