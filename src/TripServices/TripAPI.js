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
  }
}

export default new TripAPI();
