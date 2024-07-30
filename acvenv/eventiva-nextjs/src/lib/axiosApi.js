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
        const response = await instance.get('/users');
        return response.data;
    } catch (error) {
        console.error('Error! Could not fetch data: ', error);
        throw error;
    }
};

export const updateFaqData = async (faqData) => {
    try {
        const fetchedData = await fetchData();
        return fetchedData.map((item, index) => ({
            id: item.id || `item ${index + 1}`,
            question: item.name || `question ${index + 1}`,
            ans: item.email || `answer ${index + 1}`,
        }));
    } catch (error) {
        console.error ('Error updating FAQ Data: ', error);
        return faqData;
    }
};