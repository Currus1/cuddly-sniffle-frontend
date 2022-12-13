import { getCustomHttp } from "../../CustomHooks/useCustomHttp";
class TripAPI {
  getAllTripsByUserId() {
    const http = getCustomHttp();
    return http.get(`/Trip/GetAll`);
  }

  getTripDriver(driverId) {
    const http = getCustomHttp();
    return http.get(`/Trip/Driver`, { params: {driverId: driverId}})
  }

  addUserToTrip(tripId) {
    const http = getCustomHttp();
    return http.post(`/Trip/UserAdd`, { params: {tripId: tripId}})
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

  addTrip(sLatitude, sLongitude, dLatitude, dLongitude, startingPoint,
          destination, estimatedTripPrice, seats, tripDate) {
    const http = getCustomHttp();
    const content = {
      sLatitude: sLatitude,
      sLongitude: sLongitude,
      dLatitude: dLatitude,
      dLongitude: dLongitude,
      startingPoint: startingPoint,
      destination: destination,
      estimatedTripPrice: estimatedTripPrice,
      seats: seats,
      tripDate: tripDate,
    }
    return http.post("/Trip/Adding", content);
  }
}

export default new TripAPI();
