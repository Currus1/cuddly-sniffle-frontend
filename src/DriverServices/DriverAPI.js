import axios from "axios";

class DriverAPI {
  AddingDriver(Name, Surname, Birthdate, Email, Phone, VehicleType, LicenseNumber) {
    axios.post("http://localhost:5236/Driver/Adding/", {
      Name: Name,
      Surname: Surname,
      Birthdate: Birthdate,
      Email: Email,
      PhoneNumber: Phone,
      VehicleType: VehicleType,
      LicenseNumber: LicenseNumber
    });
  }

  GetAllDrivers() {
    return axios.get("http://localhost:5236/Driver/Drivers");
  }
}

export default new DriverAPI();
