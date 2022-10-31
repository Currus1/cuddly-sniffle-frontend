import axios from "axios";

class TripAPI {
  getAllTripsByUserId(id) {
    return axios.get(`http://localhost:5236/${id}/trips`);
  }

  getOneTripById(id) {
    return axios.get(`http://localhost:5236/Trip/${id}`)
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
      vehicleType: data.VehicleType,
      distance: data.Distance
    });
  }
}

export default new TripAPI();
