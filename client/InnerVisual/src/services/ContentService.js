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
            console.error("Error getting the videos", error);
        }
    },
    async updateStatusVideo(userId, contentId) {
        try {
            return await apiClient.patch(`/user_content/update_user_content/${userId}/${contentId}`);
        } catch (error) {
            console.error("Error updating status of the video:", error);
            throw error;
        }
    }
};

export default ContentService;
