import { ContentCopy } from "@mui/icons-material";
import axios from "axios";

class TripAPI {
  getAllTripsByUserId(id) {
    return axios.get(`http://localhost:5236/${id}/trips`);
  }

  getOneTripById(id) {
    return axios.get(`http://localhost:5236/Trip/${id}`)
  }

  getVehicleTypes() {
    return axios.get("http://localhost:5236/VehicleType");
  }

  getTripStatuses() {
    return axios.get("http://localhost:5236/TripStatus");
  }

  getTrips(tripStatus) {
    return axios.get("http://localhost:5236/Trip/Trips", {
      params: { tripStatus: tripStatus },
    });
  }

  addTrip(data) {
    const content = {
      Latitude: data.Latitude,
      Longitude: data.Longitude,
      StartingPoint: data.StartingPoint,
      Destination: data.Destination,
      Seats: data.Seats,
      Hours: data.Hours,
      Minutes: data.Minutes,
      Distance: data.Distance,
      VehicleType: data.VehicleType,
      EstimatedTripPrice: data.EstimatedTripPrice,
      TripStatus: data.TripStatus
    }
    console.log(content);
    return axios.post("http://localhost:5236/Trip/Adding", content);
  }
}

export default new TripAPI();
