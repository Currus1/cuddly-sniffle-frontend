import { getCustomHttp } from "../../CustomHooks/useCustomHttp";

const base = "/Trip";

class TripAPI {
  getAllTripsByUserId = () => {
    const http = getCustomHttp();
    return http.get(`${base}/GetAll`);
  };

  getTripDriver = (driverId) => {
    const http = getCustomHttp();
    return http.get(`${base}/Driver`, { params: { driverId } })
      .catch(error => {
        console.error(`Error getting trip driver: ${error}`);
      });
  };

  addUserToTrip = (tripId) => {
    const http = getCustomHttp();
    return http.post(`${base}/UserAdd?tripId=${tripId}`)
      .catch(error => {
        console.error(`Error adding user to trip: ${error}`);
      });
  };

  getOneTripById = (id) => {
    const http = getCustomHttp();
    return http.get(`${base}/${id}`);
  };

  getTrips = (tripStatus) => {
    const http = getCustomHttp();
    return http.get(`${base}/Trips`, { params: { tripStatus } })
      .catch(error => {
        console.error(`Error getting trips: ${error}`);
      });
  };

  addTrip = (sLatitude, sLongitude, dLatitude, dLongitude, startingPoint,
          destination, estimatedTripPrice, seats, tripDate) => {
    const http = getCustomHttp();
    const content = {
      sLatitude,
      sLongitude,
      dLatitude,
      dLongitude,
      startingPoint,
      destination,
      estimatedTripPrice,
      seats,
      tripDate,
    };
    return http.post(`${base}/Adding`, content)
      .catch(error => {
        console.error(`Error adding trip: ${error}`);
      });
  };
}

export default new TripAPI();