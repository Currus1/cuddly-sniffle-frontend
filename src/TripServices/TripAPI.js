import axios from "axios";

class TripAPI {
  getOngoingTrips() {
    return axios.get("http://localhost:5236/OngoingTrip/All");
  }
}

export default new TripAPI();
