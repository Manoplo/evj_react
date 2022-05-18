import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://www.elvestidordejuliettaapi.tk/api/v1/";

// Retrieve user´s profile data

const getUserProfile = () => {
    return axios.get(API_URL + "profile", { headers: authHeader() });
}

// Retrive admin dashboard data 

const getAdminDashboard = () => {
    return axios.get(API_URL + "admin/dashboard", { headers: authHeader() });
}

// TODO : MORE CONTROLLED API CALLS

const userService = {
    getUserProfile,
    getAdminDashboard
}

export default userService;