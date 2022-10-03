import axios from "axios";

class UserAPI {
  addUser(id, name, surname, birthdate, email, phoneNumber) {
    axios.post("http://localhost:5236/User/Adding/", {
      Id: id,
      Name: name,
      Surname: surname,
      Birthdate: birthdate,
      Email: email,
      PhoneNumber: phoneNumber,
    });
  }

  getAllUsers() {
    return axios.get("http://localhost:5236/User/Users");
  }
}

export default new UserAPI();
