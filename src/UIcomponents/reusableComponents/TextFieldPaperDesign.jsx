import React from "react";
import {
  fullPaperStyle,
  gridChildStyle,
  textFieldStyle
} from "../Styles/PlanTripStyle";
import { Grid, Paper, TextField } from "@material-ui/core";
import GoogleAutoComplete from "../GoogleMapIntegration/GoogleAutoComplete";

export default function TextFieldPaperDesign({
  setLongitude,
  setLatitude,
  setCity
}) {
  return (
    <>
      <Paper elevation={20} style={fullPaperStyle}>
        <Grid container style={gridChildStyle}>
          <Grid item xs={12} md={8}>
            <GoogleAutoComplete style={textFieldStyle} setLongitude={setLongitude} setLatitude={setLatitude} setCity={setCity}></GoogleAutoComplete>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
