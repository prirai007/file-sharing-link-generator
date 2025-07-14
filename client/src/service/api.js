import axios from 'axios';

// Use environment variable for API base URL
const API_URI = import.meta.env.VITE_API_BASE_URL;

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API', error.message);
    }
};
