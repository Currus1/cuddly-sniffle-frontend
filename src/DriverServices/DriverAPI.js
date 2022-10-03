import axios from "axios";

class DriverAPI {
  AddingDriver(
    Id,
    Name,
    Surname,
    Birthdate,
    Email,
    PhoneNumber,
    VehicleType,
    LicenseNumber
  ) {
    axios.post("http://localhost:5236/Driver/Adding/", {
      Id: Id,
      Name: Name,
      Surname: Surname,
      Birthdate: Birthdate,
      Email: Email,
      PhoneNumber: PhoneNumber,
      VehicleType: VehicleType,
      LicenseNumber: LicenseNumber,
    });
  }

  GetAllDrivers() {
    return axios.get("http://localhost:5236/Driver/Drivers");
  }
}

export default new DriverAPI();
