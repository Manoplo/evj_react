import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.elvestidordejuliettaapi.tk/api/v1',
})

export default api;