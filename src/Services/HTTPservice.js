import axios from 'axios'

class HTTPservice {

    getMessage () {
        return axios.get('http://localhost:5236/Driver');
    };

}

export default new HTTPservice()