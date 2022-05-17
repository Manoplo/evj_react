import axios from 'axios';

const api = axios.create({
    baseURL: 'http://167.99.221.113/api/v1',
})

export default api;