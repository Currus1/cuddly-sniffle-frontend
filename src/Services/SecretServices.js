import axios from "axios";

class SecretAPI {
  getGoogleTripApiKey() {
    return axios.get("http://localhost:5236/Api/Secrets/ApiKey");
  }
}

export default new SecretAPI();
