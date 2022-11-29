import { getCustomHttp } from "../../CustomHooks/useCustomHttp";

class SecretAPI {
  getGoogleTripApiKey() {
    const http = getCustomHttp();
    return http.get("/ApiKey/Secrets/ApiKey");
  }
}

export default new SecretAPI();
