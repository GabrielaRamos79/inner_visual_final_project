import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export const ContentService = {
    async getAllContent(userId) {
        try {
            let response = await apiClient.get(`/user_content/get_user_content/${userId}`);
            let allContent = response.data;
            return allContent;
        } catch (error) {
            console.error("Error al obtener los videos:", error);
        }
    }
};

export default ContentService;