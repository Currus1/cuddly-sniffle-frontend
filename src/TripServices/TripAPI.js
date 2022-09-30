import axios from "axios";

class TripAPI {
  getOngoingTrips() {
    return axios.get("http://localhost:5236/OngoingTrip/trips");
  }
}

export default new TripAPI();
