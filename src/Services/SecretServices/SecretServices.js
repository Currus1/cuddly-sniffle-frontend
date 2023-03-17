import { getCustomHttp } from "../../CustomHooks/useCustomHttp";

const base = "/ApiKey/Secrets/ApiKey";

class SecretAPI {
  getGoogleTripApiKey = () => {
    const http = getCustomHttp();
    return http.get(base);
  };
}

export default new SecretAPI();