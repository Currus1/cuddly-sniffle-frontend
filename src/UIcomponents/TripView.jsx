import React, { useState } from "react";
import logo from "../images/travel.png";
import TripLocation from "./TripLocation";
import {
  Avatar,
  ListItemButton,
  ListItemAvatar,
  ListItem,
} from "@mui/material";

const TripView = ({ id, dest, price }) => {
  return (
    <div style={{ width: "400px" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="" src={logo} variant="rounded"></Avatar>
        </ListItemAvatar>
        <ListItemButton>
          <TripLocation _dest={dest} _price={price}></TripLocation>
        </ListItemButton>
      </ListItem>
    </div>
  );
};

export default TripView;
