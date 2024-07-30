import axios from "axios";

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
});

// Add headers or auth tokens
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const fetchData = async () => {
    try {
        const response = await instance.get('/posts');
        return response.data;
    } catch (error) {
        console.error('Error! Could not fetch data: ', error);
        throw error;
    }
};