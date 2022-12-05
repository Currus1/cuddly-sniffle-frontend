import { React, useMemo, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import HeaderComponent from "../BaseHeader/HeaderComponent";
import TripAPI from "../../Services/TripServices/TripAPI.js";
import SecretAPI from "../../Services/SecretServices/SecretServices.js";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import TripPlanningSaveComponent from "./TripPlanningSaveComponent";
import EnterAddressComponent from "./EnterAddressComponent";
import FooterComponent from "../BaseFooter/FooterComponent";
import backgroundStyle from "../Styles/BackgroundStyle.module.css";
import { useUserValidation } from "../../CustomHooks/useUserValidation";
import { useNavigate } from "react-router-dom";

const PlanningComponent = () => {
  const [errorText, setErrorText] = useState("");
  const [trip] = useState([]);
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [startingPoint, setStartingPoint] = useState("");
  const [destination, setDestination] = useState("");
  const navigate = useNavigate("");
  var isValid = useUserValidation();

  useEffect(() => {
    if (!isValid) {
      navigate("/");
    }
  }, []);

  function saveClicked() {
    if (
      document.getElementById("seats").value != "" &&
      document.getElementById("hours").value != "" &&
      document.getElementById("minutes").value != "" &&
      longitude &&
      latitude
    ) {
      trip.Latitude = latitude;
      trip.Longitude = longitude;
      trip.StartingPoint = startingPoint;
      trip.Destination = destination;
      trip.Seats = document.getElementById("seats").value;
      trip.Hours = document.getElementById("hours").value;
      trip.Minutes = document.getElementById("minutes").value;
      trip.Distance = 100;
      trip.VehicleType = 2;
      trip.TripStatus = "Planned";
      trip.EstimatedTripPrice = 12;

      TripAPI.addTrip(trip);

      setErrorText("Trip was created!");
    } else {
      setErrorText("Error with given data");
    }
  }

  function Map() {
    const center = useMemo(() => ({ lat: 54.689461, lng: 25.27986 }), []);
    return (
      <GoogleMap
        zoom={14}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} />
      </GoogleMap>
    );
  }

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

  const MapLoader = ({ apiKey }) => {
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: apiKey,
    });

    if (!isLoaded) return <div>Loading...</div>;

    return <Map />;
  };

  const key = useMapsApiKey();

  if (!key) return null;

  return (
    <>
      <HeaderComponent />
      <div className={backgroundStyle.bg}>
        <Grid container>
          <Grid item xs={12} md={3}>
            <EnterAddressComponent
              setLongitude={setLongitude}
              setLatitude={setLatitude}
              setCity={setStartingPoint}
              placeholder="Enter the starting address"
            />

            <EnterAddressComponent
              setLongitude={setLongitude}
              setLatitude={setLatitude}
              setCity={setDestination}
              placeholder="Enter the destination address"
            />

            <TripPlanningSaveComponent
              saveClicked={saveClicked}
              errorText={errorText}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <MapLoader apiKey={key} style={{ zIndex: "-1" }} />
          </Grid>
        </Grid>
        <FooterComponent />
      </div>
    </>
  );
};

export default PlanningComponent;
