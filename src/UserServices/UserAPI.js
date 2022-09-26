import axios from 'axios'

class UserAPI {

    addUser(){
        return axios.post(`http://localhost:5236/User/Adding/`);
    }

    getMessage () {
        return axios.get('http://localhost:5236/User/Users');
    };

}

export default new UserAPI()