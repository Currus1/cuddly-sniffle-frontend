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

  GetAllUsers() {
    return axios.get("http://localhost:5236/User/Users");
  }
}

export default new UserAPI();
