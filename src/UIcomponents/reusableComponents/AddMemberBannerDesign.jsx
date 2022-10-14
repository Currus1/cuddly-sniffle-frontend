import React from "react";
import { Grid, Avatar, Typography, Divider } from "@material-ui/core";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {
  avatarStyle,
  iconStyle,
  headerStyle,
  dividerStyle,
} from "../styles/muiStyle.js";

export default function AddMemberDesignTop({ headerText }) {
  return (
    <Grid align="left">
      <Avatar style={avatarStyle}>
        {" "}
        <PersonAddIcon style={iconStyle} />{" "}
      </Avatar>
      <h2 style={headerStyle}>{headerText}</h2>
      <Typography variant="caption">Fill in all the fields below</Typography>
      <Divider style={dividerStyle} />
    </Grid>
  );
}
