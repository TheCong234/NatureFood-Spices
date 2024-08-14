import axios from 'axios';
import Cookies from 'js-cookie';


const apiClient = axios.create({
    baseURL: import.meta.env.VITE_APP_DOMAIN + '/api/v1',
    headers:{
        'Authorization': `Bearer ${Cookies.get('token') || ""}`
    },
    timeout: 60000,
    withCredentials: true,
})

export {apiClient};