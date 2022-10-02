import axios from "axios";

class TripAPI {
  getOngoingTrips() {
    return axios.get("http://localhost:5236/OngoingTrip/All");
  }

  getTripStatusEnum () {
    return axios.get("http://localhost:5236/VehicleType");
  }
}

export default new TripAPI();
