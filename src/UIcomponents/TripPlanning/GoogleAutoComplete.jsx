import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { TextField } from "@material-ui/core";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NearMeIcon from "@mui/icons-material/NearMe";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

const AutoComplete = ({
  start,
  dest,
  setStart,
  setDest,
  setStartCoords,
  setDestCoords,
}) => {
  const handleSelectStart = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        var startCoordsVals = { lat: latLng.lat, lng: latLng.lng };
        setStartCoords(startCoordsVals);
      })
      .catch((error) => {
        console.error("Error", error);
      });
    var arr = address.split(",");
    var newArr = arr.map(function (element, index) {
      if (!element.toLowerCase().includes("municipality")) {
        return element;
      }
    });
    var str = newArr.join("");
    setStart(str);
  };

  const handleSelectDest = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        var destCoordsVals = { lat: latLng.lat, lng: latLng.lng };
        setDestCoords(destCoordsVals);
      })
      .catch((error) => {
        console.error("Error", error);
      });
    var arr = address.split(",");
    var newArr = arr.map(function (element, index) {
      if (!element.toLowerCase().includes("municipality")) {
        return element;
      }
    });
    var str = newArr.join("");
    setDest(str);
  };

  return (
    <>
      <PlacesAutocomplete
        value={start}
        onChange={(start) => {
          setStart(start);
        }}
        onSelect={handleSelectStart}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="autocomplete-root">
            <TextField
              {...getInputProps()}
              margin="normal"
              fullWidth
              placeholder="Starting location"
              id="startingPoint"
              InputProps={{
                style: {
                  color: "black",
                  fontWeight: "bolder",
                  fontFamily: "montserrat",
                },
                startAdornment: (
                  <InputAdornment position="start" style={{ color: "#7BC950" }}>
                    <NearMeIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: "transparent",
                  cursor: "pointer",
                };

                return (
                  <div
                    key={suggestion.placeId}
                    {...getSuggestionItemProps(suggestion, { style })}
                  >
                    <li style={{ marginLeft: "1vh" }}>
                      {suggestion.description}
                    </li>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <PlacesAutocomplete
        value={dest}
        onChange={(dest) => setDest(dest)}
        onSelect={handleSelectDest}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <div className="autocomplete-root">
              <TextField
                {...getInputProps()}
                margin="normal"
                fullWidth
                placeholder="Destination"
                id="destination"
                InputProps={{
                  style: {
                    color: "black",
                    fontWeight: "bolder",
                    fontFamily: "montserrat",
                  },
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{ color: "#7BC950" }}
                    >
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  };

                  return (
                    <div
                      key={suggestion.placeId}
                      {...getSuggestionItemProps(suggestion, { style })}
                    >
                      <li style={{ marginLeft: "1vh" }}>
                        {suggestion.description}
                      </li>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
};
export default AutoComplete;
