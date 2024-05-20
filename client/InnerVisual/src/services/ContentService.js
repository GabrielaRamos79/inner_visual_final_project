import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export const ContentService = {
    async getAllContent() {
        try {
            let response = await apiClient.get("/content/get_content");
            let allContent = response.data;
            return allContent;
        } catch (error) {
            console.error("Error al obtener los videos:", error);
        }
    },

    async getContentById(id) {
        try {
            let response = await apiClient.get("/content/get_content/" + id);
            let oneContent = response.data;
            return oneContent;
        } catch (error) {
            console.error("Error al obtener los videos:", error);
        }
    }

}

export default ContentService;