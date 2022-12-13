import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import styles from "./Styles/PlanTripStyle.module.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import GoogleAutoComplete from "../GoogleMapIntegration/GoogleAutoComplete";
import Box from "@mui/material/Box";
import { TextField } from "@material-ui/core";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NearMeIcon from "@mui/icons-material/NearMe";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import FooterComponent from "../BaseFooter/FooterComponent";

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AutocompleteDialog({
  text,
  setStartingPoint,
  setDestination,
}) {
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState("");
  const [dest, setDest] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (
      sessionStorage.getItem("SLatitude") != null &&
      sessionStorage.getItem("SLongitude") != null &&
      sessionStorage.getItem("DLatitude") != null &&
      sessionStorage.getItem("DLongitude") != null &&
      sessionStorage.getItem("start") != null &&
      sessionStorage.getItem("dest") != null
    ) {
      setOpen(false);
    } else {
      setOpen(false);
      setStartingPoint("");
      setDestination("");
      sessionStorage.clear();
    }
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
      <Button
        className={styles.createButton}
        variant="outlined"
        onClick={handleClickOpen}
      >
        {text}
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#808080" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Select
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSaveClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            backgroundColor: "#F0F0F0",
          }}
        >
          <GoogleAutoComplete
            inputId="address"
            dest={dest}
            setDest={setDest}
            start={start}
            setStart={setStart}
          />
        </Box>
        <DialogContent style={{ backgroundColor: "#F0F0F0" }}></DialogContent>
      </Dialog>
    </div>
  );
}
