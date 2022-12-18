import axios from 'axios';

export const getCustomHttp = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const instance = axios.create({
        baseURL: 'http://localhost:5236/apisecure',
        headers: {'Authorization' : `Bearer ${user}`}
    });
    return instance;
};