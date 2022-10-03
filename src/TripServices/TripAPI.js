import axios from "axios";

class TripAPI {
  getOngoingTrips() {
    return axios.get("http://localhost:5236/OngoingTrip/All");
  }

  getTripStatusEnum () {
    return axios.get("http://localhost:5236/VehicleType");
  }

  addTrip(data) {
    return axios.post("http://localhost:5236/Trip/Adding", {
      id: data.Id,
      driverId: data.DriverId,
      userId: data.UserId,
      startingPoint: data.StartingPoint,
      destination: data.Destination,
      seats: data.Seats,
      hours: data.Hours,
      minutes: data.Minutes,
      estimatedTripPrice: data.EstimatedTripPrice
    });
  }
}

export default new TripAPI();
