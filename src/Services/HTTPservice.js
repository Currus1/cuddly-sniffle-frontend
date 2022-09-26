import axios from 'axios'

class HTTPservice {

    getMessage () {
        return axios.get('http://localhost:5236/Test');
    };

}

export default new HTTPservice()