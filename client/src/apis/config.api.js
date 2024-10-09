import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_APP_DOMAIN + "/api/v1",

    timeout: 60000,
    withCredentials: true,
});

export { apiClient };
