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

  UpdateUser(users) {
    const http = getCustomHttp();
    http.put("/User/Update", {
      Id: users.Id,
      Name: users.Name,
      Surname: users.Surname,
      Birthdate: users.Birthdate,
      Email: users.Email,
      PhoneNumber: users.PhoneNumber,
    });
  }

  UpdateDriver(drivers) {
    const http = getCustomHttp();
    http.put("/User/Update", {
      Id: drivers.Id,
      Name: drivers.Name,
      Surname: drivers.Surname,
      Birthdate: drivers.Birthdate,
      Email: drivers.Email,
      PhoneNumber: drivers.PhoneNumber,
      VehicleType: drivers.VehicleType,
      LicenseNumber: drivers.LicenseNumber,
    });
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
