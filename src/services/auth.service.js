import axios from   'axios';
const API_URL = "http://elvestidordejulietta.test/api/v1/";

// Register Function
const register = (name, lastname, email, password, confirmPassword) => {

    return axios.post(API_URL + 'user/register', {
        name,
        lastname,
        email,
        password,
        confirmPassword
    });
} 

// Login Function
const login = (email, password) => {
     axios.post(API_URL + 'user/login', {
        email,
        password
    }).then(response => {
        if(response.data.accessToken){
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        console.log(response.data)
        return response.data;
    });
}

// Logout function 
const logout = () => {
    localStorage.removeItem('user');
}   

const authService = {
    register,
    login,
    logout
}

export default authService;