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

const TripView = ({ dest, price }) => {
  return (
    <div className={styles.max_width}>
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
