import axios from "axios";

class UserAPI {
  addUser(id, name, surname, birthdate, email, phone) {
    axios.post("http://localhost:5236/User/Adding/", {
      Id: id,
      Name: name,
      Surname: surname,
      Birthdate: birthdate,
      Email: email,
      Phone: phone,
    });
  }

  getAllUsers() {
    return axios.get("http://localhost:5236/User/Users");
  }
}

export default new UserAPI();
