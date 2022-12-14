import axios from "axios"

const API_URL = "http://localhost:5236/api/auth";

class AuthService {
    login(email, password) {
        return axios
          .post(API_URL + "/login", {
            email: email,
            password: password
          })
          .then(response => {
            if (response.data.token) {
              localStorage.setItem("user", JSON.stringify(response.data.token));
            }
    
            return response.data;
          });
      }
    
      logout() {
        localStorage.removeItem("user");
        sessionStorage.clear();
      }
    
      register(name, surname, email, password, birthDate, number) {
        return axios.post(API_URL + "/register", {
          name,
          surname,
          email,
          password, 
          birthdate,
          phoneNumber
        });
      }
    
      getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
      }
}


export default new AuthService();