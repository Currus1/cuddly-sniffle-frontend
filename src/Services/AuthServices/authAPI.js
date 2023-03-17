import axios from "axios"

const base = "http://localhost:5236/api/auth";

class AuthAPI {
    login = (email, password) => {
        return axios
          .post(`${base}/login`, {
            email,
            password,
          })
          .then(response => {
            if (response.data.token) {
              sessionStorage.setItem("user", JSON.stringify(response.data.token));
            }
    
            return response.data;
          })
          .catch(error => {
            console.error(`Error logging in: ${error}`);
          });
    }
    
    logout = () => {
        sessionStorage.removeItem("user");
        sessionStorage.clear();
    }
    
    register = (name, surname, email, password, birthdate, phoneNumber) => {
        return axios.post(`${base}/register`, {
          name,
          surname,
          email,
          password,
          birthdate,
          phoneNumber,
        })
        .catch(error => {
          console.error(`Error registering: ${error}`);
        });
    }
    
    getCurrentUser = () => {
        return JSON.parse(sessionStorage.getItem('user'));
    }
}

export default new AuthAPI();