import axios from 'axios';

const API = axios.create({
   baseURL: 'https://contact-manager-backend-vrhd.onrender.com/api',
});

export default API;