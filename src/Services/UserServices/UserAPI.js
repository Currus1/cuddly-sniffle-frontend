import { getCustomHttp } from "../../CustomHooks/useCustomHttp";
class UserAPI {

  UpdateDriver(LicenseNumber, DriversLicense, VehicleType) {
    const http = getCustomHttp();
    http.put("/User/Driver", {
      VehicleType: VehicleType,
      LicenseNumber: LicenseNumber,
      DriversLicense: DriversLicense,
    })
  }

  GetUser() {
    const http = getCustomHttp();
    return http.get(`/User`);
  }
}

export default new UserAPI();
