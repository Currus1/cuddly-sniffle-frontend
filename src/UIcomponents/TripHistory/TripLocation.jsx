import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TripLocation = ({ trip }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead></TableHead>
        <TableBody>
          <TableRow>
            <TableCell width={"5%"} align="left">
              {trip.destination}
            </TableCell>
            <TableCell align="left">({trip.tripStatus})</TableCell>
            <TableCell align="right">{trip.estimatedTripPrice} €</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TripLocation;
