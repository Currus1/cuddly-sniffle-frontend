import axios from "axios";

class DriverAPI {
  AddDriver(driver) {
    axios.post("http://localhost:5236/Driver/Adding/", {
      Id: driver.Id,
      Name: driver.Name,
      Surname: driver.Surname,
      Birthdate: driver.Birthdate,
      Email: driver.Email,
      PhoneNumber: driver.PhoneNumber,
      VehicleType: driver.VehicleType,
      LicenseNumber: driver.LicenseNumber,
    });
  }

  GetAllDrivers() {
    return axios.get("http://localhost:5236/Driver/Drivers");
  }
}

export default new DriverAPI();
