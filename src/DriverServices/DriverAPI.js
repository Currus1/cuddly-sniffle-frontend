import axios from 'axios'

class DriverAPI {

    addDriver(Klaidas){
        return axios.post(`http://localhost:5236/Driver/Adding/${Klaidas}`);
    }

    getMessage () {
        return axios.get('http://localhost:5236/Driver');
    };

}

export default new DriverAPI()