import React from "react";
import logo from "../../Images/travel.png";
import TripLocation from "./TripLocation";
import {
  Avatar,
  ListItemButton,
  ListItemAvatar,
  ListItem,
} from "@mui/material";
import styles from "./Styles/TripHistoryStyle.module.css";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import TripDialog from "./TripDialog";
import TripAPI from "../../Services/TripServices/TripAPI";

const TripView = ({ trip }) => {
  const [open, setOpen] = React.useState(false);
  const [driver, setDriver] = React.useState(false);

  const handleClick = () => {
    const fetchData = async () => {
      try {
        await TripAPI.getTripDriver(trip.driverId).then((res) =>
          setDriver(res.data)
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ListItem>
        <ListItemButton onClick={handleClick}>
          <ListItemAvatar>
            <Avatar alt="" src={logo} variant="rounded"></Avatar>
          </ListItemAvatar>
          <TripLocation trip={trip}></TripLocation>
        </ListItemButton>
      </ListItem>
      <TripDialog
        driver={driver}
        trip={trip}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};

export default TripView;
