import ContentService from "../services/ContentService";

export const ContentHandler = {
    async getAllContent(userId) {
        let content = await ContentService.getAllContent(userId);
        return content;
    },
    async updateStatusVideo(userId, contentId) {
        try {
            return await ContentService.updateStatusVideo(userId, contentId);
        } catch (error) {
            console.error("Error updating user:", error);
            throw error;
        }
    }
};

export default ContentHandler;