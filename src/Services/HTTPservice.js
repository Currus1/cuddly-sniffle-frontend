import axios from 'axios'

class HTTPservice {

    
    getMessage () {
        return axios.get('https://localhost:7083/main');
    };

}

export default new HTTPservice()