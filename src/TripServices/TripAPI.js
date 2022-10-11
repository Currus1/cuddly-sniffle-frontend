import axios from "axios";

class TripAPI {
  getOngoingTrips() {
    return axios.get("http://localhost:5236/OngoingTrip/All");
  }

  getVehicleTypeEnum () {
    return axios.get("http://localhost:5236/VehicleType");
  }

  addTrip(data) {
    return axios.post("http://localhost:5236/Trip/Adding", {
      id: data.Id,
      driverId: data.DriverId,
      userIds: [parseInt(data.UserId)],
      startingPoint: data.StartingPoint,
      destination: data.Destination,
      seats: data.Seats,
      hours: data.Hours,
      minutes: data.Minutes,
      vehicleType: data.VehicleType
    });
  }
}

export default new TripAPI();
