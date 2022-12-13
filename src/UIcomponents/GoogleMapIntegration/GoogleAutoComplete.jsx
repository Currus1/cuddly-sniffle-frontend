import { useRef, useEffect, useState } from "react";
import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { TextField } from "@material-ui/core";
import { Place } from "@material-ui/icons";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NearMeIcon from "@mui/icons-material/NearMe";

const AutoComplete = ({ inputId, start, dest, setStart, setDest }) => {
  const handleSelectStart = (address) => {
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
                startAdornment: (
                  <InputAdornment position="start">
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
                  backgroundColor: "#F0F0F0",
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
                  startAdornment: (
                    <InputAdornment position="start">
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
                    backgroundColor: "#F0F0F0",
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
