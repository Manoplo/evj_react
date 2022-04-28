import axios from 'axios';

const api = axios.create({
    baseURL: 'http://elvestidordejulietta.test/api/v1',
})

export default api;