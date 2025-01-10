import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // Replace with your API base URL
    timeout: 1000, // Optional timeout
    headers: {
        'Content-Type': 'application/json',
        // Add any other custom headers if needed
    },
});

// You can also add interceptors if needed
axiosInstance.interceptors.request.use(
    config => {
        // Do something before request is sent
        return config;
    },
    error => {
        // Do something with request error
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => {
        // Do something with response data
        return response;
    },
    error => {
        // Do something with response error
        return Promise.reject(error);
    }
);

export default axiosInstance;