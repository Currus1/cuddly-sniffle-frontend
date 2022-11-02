import axios from "axios";

class UserAPI {
  addUser(users) {
    axios.post("http://localhost:5236/User/Adding/", {
      Id: users.Id,
      Name: users.Name,
      Surname: users.Surname,
      Birthdate: users.Birthdate,
      Email: users.Email,
      PhoneNumber: users.PhoneNumber,
    });
  }

  UpdateUser(users) {
    axios.put("http://localhost:5236/User/Update", {
      Id: users.Id,
      Name: users.Name,
      Surname: users.Surname,
      Birthdate: users.Birthdate,
      Email: users.Email,
      PhoneNumber: users.PhoneNumber,
    });
  }

  UpdateDriver(drivers) {
    axios.put("http://localhost:5236/User/Update", {
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

  GetUser(id) {
    return axios.get("http://localhost:5236/User/" + id);
  }

  GetAllUsers() {
    return axios.get("http://localhost:5236/User/Users");
  }
}

export default new UserAPI();
