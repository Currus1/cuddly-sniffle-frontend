import React from "react";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TripLocation = ({ trip }) => {
  useEffect(() => {
    var tripRegex = trip.tripDate.split("T");
    trip.tripDate = tripRegex[0];
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead></TableHead>
        <TableBody>
          <TableRow
            style={{
              backgroundColor: "#E8E5DA",
              border: "2px solid #7BC950",
            }}
          >
            <TableCell
              style={{ fontFamily: "montserrat", fontWeight: "bolder" }}
              width={"30%"}
              align="left"
            >
              {trip.destination}
            </TableCell>
            <TableCell
              style={{ fontFamily: "montserrat", fontWeight: "bolder" }}
              width={"60%"}
              align="right"
            >
              {trip.tripDate}
            </TableCell>
            <TableCell
              style={{ fontFamily: "montserrat", fontWeight: "bolder" }}
              align="right"
            >
              {trip.estimatedTripPrice} €
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TripLocation;
