import { getCustomHttp } from "../../CustomHooks/useCustomHttp";
class UserAPI {
  addUser(users) {
    const http = getCustomHttp();
    http.post("/User/Adding/", {
      Id: users.Id,
      Name: users.Name,
      Surname: users.Surname,
      Birthdate: users.Birthdate,
      Email: users.Email,
      PhoneNumber: users.PhoneNumber,
    });
  } 
  
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

  GetAllUsers() {
    const http = getCustomHttp();
    return http.get("/User/Users");
  }
}

export default new UserAPI();
