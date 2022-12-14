import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import styles from "./Styles/TripDialogStyle.module.css";

export default function TripDialog({ trip, driver, open, onClose, google }) {
  function findCenter(startCoords, endCoords) {
    const centerX = (startCoords.lat + endCoords.lat) / 2;
    const centerY = (startCoords.lng + endCoords.lng) / 2;
    return { lat: centerX, lng: centerY };
  }

  const startCoords = { lat: trip.sLatitude, lng: trip.sLongitude };
  const destCoords = { lat: trip.dLatitude, lng: trip.dLongitude };
  const center = findCenter(startCoords, destCoords);

  return (
    <Dialog
      style={{ backgroundColor: "#F0F0F0" }}
      open={open}
      onClose={onClose}
    >
      <div style={{ backgroundColor: "#F0F0F0", color: "black" }}>
        <DialogTitle>Trip Details</DialogTitle>
        <DialogContent>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API}>
              <GoogleMap
                options={{
                  disableDefaultUI: true,
                }}
                center={center}
                zoom={11}
                mapContainerStyle={{
                  height: "30vh",
                  width: "30vh",
                  position: "relative",
                }}
              >
                <Marker
                  icon={{
                    url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
                  }}
                  position={startCoords}
                />
                <Marker
                  icon={{
                    url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  }}
                  position={destCoords}
                />
              </GoogleMap>
            </LoadScript>
          </div>

          <DialogTitle>Driver Information</DialogTitle>
          <DialogContent className={styles.dialogText}>
            <Typography>Driver Id: {driver.id}</Typography>
            <Typography>
              Personal Name: {driver.name} {driver.surname}
            </Typography>
            <Typography></Typography>
          </DialogContent>
          <DialogTitle>Trip Information</DialogTitle>
          <DialogContent className={styles.dialogText}>
            <Typography>
              Duration: {trip.hours}h {trip.minutes}min
            </Typography>
            <Typography>Distance: {trip.distance} km</Typography>
            <Typography>Price: {trip.estimatedTripPrice}€</Typography>
          </DialogContent>
        </DialogContent>
      </div>
    </Dialog>
  );
}
