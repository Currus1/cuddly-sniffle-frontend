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
<<<<<<< HEAD
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
=======
    return axios.post("http://localhost:5236/Trip/Adding", {
      id: data.Id,
      driverId: data.DriverId,
      userIds: [parseInt(data.UserId)],
      startingPoint: data.StartingPoint,
      destination: data.Destination,
      seats: data.Seats,
      hours: data.Hours,
      minutes: data.Minutes,
      vehicleType: data.VehicleType,
      distance: data.Distance,
    });
>>>>>>> 9999c6c4e5ac9ba9560adaf0a93bfc5fec300e7c
  }
}

export default new TripAPI();
