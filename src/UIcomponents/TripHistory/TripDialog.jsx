import React from "react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { Map, GoogleApiWrapper } from "google-maps-react";
import TripAPI from "../../Services/TripServices/TripAPI";

function TripDialog({ trip, driver, open, onClose, google }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Trip Details</DialogTitle>
      <DialogContent>
        {/* <Map
          google={google}
          zoom={8}
          initialCenter={{
            lat: lat,
            lng: lng,
          }}
        /> */}
        <DialogContent>
          <Typography>Starting Point: {trip.startingPoint}</Typography>
          <Typography>Destination: {trip.destination}</Typography>
          <Typography>Driver Id: {driver.id}</Typography>
          <Typography>Name: {driver.name}</Typography>
          <Typography>Surname: {driver.surname}</Typography>
          <Typography>Destination: {trip.destination}</Typography>
          <Typography>
            Duration: {trip.hours}h {trip.minutes}min
          </Typography>
          <Typography>Distance: {trip.distance} km</Typography>
          <Typography>Vehicle type: {trip.vehicleType}</Typography>
          <Typography>Price: {trip.estimatedTripPrice}</Typography>
          <Typography>Status: {trip.tripStatus}</Typography>
          <Typography>Lat: {trip.latitude}</Typography>
          <Typography>Lng: {trip.longitude}</Typography>
        </DialogContent>
      </DialogContent>
    </Dialog>
  );
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_MAP_API}`,
})(TripDialog);
