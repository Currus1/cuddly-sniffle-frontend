import React from "react";
import { Card, IconButton } from "@material-ui/core";
import CardHeader from "@mui/material/CardHeader";
import TimerSharpIcon from "@mui/icons-material/TimerSharp";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import TimerOffIcon from "@mui/icons-material/TimerOff";
import CloseIcon from "@mui/icons-material/Close";

const HomePageTripCard = () => {
  const StatusIcon = (status) => {
    if (status === "Planned") {
      return <TimerSharpIcon />;
    } else if (status === "Ongoing") {
      return <TimeToLeaveIcon />;
    } else if (status === "Ended") {
      return <TimerOffIcon />;
    } else if (status === "Cancelled") {
      return <CloseIcon />;
    } else {
      return <></>;
    }
  };

  return (
    <Card elevation={2}>
      <CardHeader>
        action={<IconButton>{StatusIcon(trip.trip.tripStatus)}</IconButton>}
        title={`${trip.trip.seats} - ${trip.trip.destination}`}
        subheader=
        {`${trip.trip.distance}km (${trip.trip.hours}h ${trip.trip.minutes}min)`}
      </CardHeader>
    </Card>
  );
};

export default HomePageTripCard;
