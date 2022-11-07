import React, { useState } from "react";
import logo from "../../Images/travel.png";
import TripLocation from "./TripLocation";
import {
  Avatar,
  ListItemButton,
  ListItemAvatar,
  ListItem,
} from "@mui/material";
import "./Styles/TripHistoryStyle.css";

const TripView = ({ id, dest, price }) => {
  return (
    <div className="max-width">
      <ListItem>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt="" src={logo} variant="rounded"></Avatar>
          </ListItemAvatar>
          <TripLocation _dest={dest} _price={price}></TripLocation>
        </ListItemButton>
      </ListItem>
    </div>
  );
};

export default TripView;
