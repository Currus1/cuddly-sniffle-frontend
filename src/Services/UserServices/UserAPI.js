import { getCustomHttp } from "../../CustomHooks/useCustomHttp";

const base = "/User";

class UserAPI {
  updateDriver = (licenseNumber, driversLicense, vehicleType) => {
    const http = getCustomHttp();
    const data = {
      LicenseNumber: licenseNumber,
      DriversLicense: driversLicense,
      VehicleType: vehicleType,
    };
    return http.put(`${base}/Driver`, data);
  };

  getUser = () => {
    const http = getCustomHttp();
    return http.get(base);
  };
}

export default new UserAPI();