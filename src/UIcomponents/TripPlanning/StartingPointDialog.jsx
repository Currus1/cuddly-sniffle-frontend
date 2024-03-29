import * as React from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import styles from "./Styles/PlanTripStyle.module.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import GoogleAutoComplete from "./GoogleAutoComplete";
import Box from "@mui/material/Box";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { GoogleMap, Marker } from "@react-google-maps/api";

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const startCoordsVals = { lat: 54.687157, lng: 25.279652 };
const destCoordsVals = { lat: 54.687157, lng: 25.279652 };

export default function AutocompleteDialog({
  text,
  setStartingPoint,
  setDestination,
}) {
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState("");
  const [dest, setDest] = useState("");
  const [startCoords, setStartCoords] = useState(startCoordsVals);
  const [destCoords, setDestCoords] = useState(destCoordsVals);

  const center = findCenter(startCoords, destCoords);

  function findCenter(startCoords, endCoords) {
    const centerX = (startCoords.lat + endCoords.lat) / 2;
    const centerY = (startCoords.lng + endCoords.lng) / 2;
    return { lat: centerX, lng: centerY };
  }

  const handleClear = () => {
    setStart("");
    setDest("");
    const coordsVals = { lat: 54.687157, lng: 25.279652 };
    setStartCoords(coordsVals);
    setDestCoords(coordsVals);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setStartingPoint("");
    setDestination("");
    sessionStorage.removeItem("SLatitude");
    sessionStorage.removeItem("SLongitude");
    sessionStorage.removeItem("DLatitude");
    sessionStorage.removeItem("DLongitude");
    sessionStorage.removeItem("start");
    sessionStorage.removeItem("dest");
  };

  const handleSaveClose = () => {
    if (start.length <= 0 || dest.length <= 0) {
      setStartingPoint("");
      setDestination("");
      sessionStorage.removeItem("SLatitude");
      sessionStorage.removeItem("SLongitude");
      sessionStorage.removeItem("start");
      sessionStorage.removeItem("DLatitude");
      sessionStorage.removeItem("DLongitude");
      sessionStorage.removeItem("dest");
    } else {
      if (
        sessionStorage.getItem("SLatitude") != null &&
        sessionStorage.getItem("SLongitude") != null &&
        sessionStorage.getItem("DLatitude") != null &&
        sessionStorage.getItem("DLongitude") != null
      ) {
        setStartingPoint(start);
        setDestination(dest);
      } else {
        geocodeByAddress(start)
          .then((results) => getLatLng(results[0]))
          .then((latLng) => {
            console.log("Success", latLng);
            sessionStorage.setItem("SLatitude", latLng.lat);
            sessionStorage.setItem("SLongitude", latLng.lng);
            sessionStorage.setItem("start", start);
          })
          .catch((error) => {
            console.error("Error", error);
            sessionStorage.removeItem("SLatitude");
            sessionStorage.removeItem("SLongitude");
            sessionStorage.removeItem("start");
          });
        geocodeByAddress(dest)
          .then((results) => getLatLng(results[0]))
          .then((latLng) => {
            console.log("Success", latLng);
            sessionStorage.setItem("DLatitude", latLng.lat);
            sessionStorage.setItem("DLongitude", latLng.lng);
            sessionStorage.setItem("dest", dest);
          })
          .catch((error) => {
            console.error("Error", error);
            sessionStorage.removeItem("DLatitude");
            sessionStorage.removeItem("DLongitude");
            sessionStorage.removeItem("dest");
          });

        setStartingPoint(start);
        setDestination(dest);
      }
    }

    setOpen(false);
  };

  return (
    <div>
      <button className={styles.button} onClick={handleClickOpen}>
        {text}
      </button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#7BC950" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
            ></Typography>
            <button
              style={{ marginRight: "1vh" }}
              className={styles.saveButton}
              autoFocus
              color="inherit"
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              className={styles.saveButton}
              autoFocus
              color="inherit"
              onClick={handleSaveClose}
            >
              Save
            </button>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            backgroundColor: "#E8E5DA",
          }}
        >
          <GoogleAutoComplete
            dest={dest}
            setDest={setDest}
            start={start}
            setStart={setStart}
            setDestCoords={setDestCoords}
            setStartCoords={setStartCoords}
          />
        </Box>
        <DialogContent
          style={{
            backgroundColor: "#E8E5DA",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GoogleMap
            options={{
              disableDefaultUI: true,
            }}
            center={center}
            zoom={11}
            mapContainerStyle={{
              height: "100%",
              width: "100%",
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
        </DialogContent>
      </Dialog>
    </div>
  );
}
