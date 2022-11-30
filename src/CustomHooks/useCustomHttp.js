import axios from 'axios';

export const getCustomHttp = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const instance = axios.create({
        baseURL: 'http://localhost:5236',
        headers: {'Authorization' : `Bearer ${user}`}
    });
    return instance;
};