import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { Grid } from "@material-ui/core";
import scriptLoader from "react-async-script-loader";

function GoogleAutoComplete({
  isScriptLoaded,
  isScriptLoadSucceed,
  setLongitude,
  setLatitude,
  setCity,
  placeholder
}) {
  const [address, setAddress] = useState("");

  const handleChange = (value) => {
    setAddress(value);
  };

  const handleSelect = () => {
    geocodeByAddress(address)
      .then((results) => {
        setCity(results[0].formatted_address);
        return getLatLng(results[0]);
      })
      .then((latLng) => {
        setLongitude(latLng.lng);
        setLatitude(latLng.lat);
      })
      .catch((error) => console.error("Error", error));
  };

  if (isScriptLoaded && isScriptLoadSucceed) {
    return (
      <div style={{width: "400px"}}>
        <Grid container>
          <Grid item xs={12} md={10}>
            <PlacesAutocomplete value={address} onChange={handleChange}>
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <input
                    className="address-field"
                    {...getInputProps({
                      placeholder: placeholder,
                    })}
                  />
                  <div>
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const style = suggestion.active
                        ? { backgroundColor: "#0099cc", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };

                      return (
                        <div {...getSuggestionItemProps(suggestion, { style })}>
                          {suggestion.description}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </Grid>

          <Grid item xs={12} md={2}>
            <button onClick={handleSelect} className="button-save">
              Save
            </button>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&libraries=places`,
])(GoogleAutoComplete);
