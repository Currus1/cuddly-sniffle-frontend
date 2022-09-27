import axios from "axios";

class UserAPI {
  addUser(Name, Surname, Birthdate, Email, Phone) {
    axios.post("http://localhost:5236/User/Adding/", {
      Name: Name,
      Surname: Surname,
      Birthdate: Birthdate,
      Email: Email,
      Phone: Phone,
    });
  }

  getAllUsers() {
    return axios.get("http://localhost:5236/User/Users");
  }
}

export default new UserAPI();
