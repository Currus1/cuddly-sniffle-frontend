import { getCustomHttp } from "../../CustomHooks/useCustomHttp";
class TripAPI {
  getAllTripsByUserId(id) {
    const http = getCustomHttp();
    return http.get(`/${id}/trips`);
  }

  getOneTripById(id) {
    const http = getCustomHttp();
    return http.get(`/Trip/${id}`);
  }

  getVehicleTypes() {
    const http = getCustomHttp();
    return http.get("/VehicleType");
  }

  getTripStatuses() {
    const http = getCustomHttp();
    return http.get("/TripStatus");
  }

  getTrips(tripStatus) {
    const http = getCustomHttp();
    return http.get("/Trip/Trips", { params: { tripStatus: tripStatus } });
  }

  addTrip(data) {
    const http = getCustomHttp();
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
    return http.post("/Trip/Adding", content);
  }
}

export default new TripAPI();
