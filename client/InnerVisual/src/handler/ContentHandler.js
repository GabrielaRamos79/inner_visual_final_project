import ContentService from "../services/ContentService";

export const ContentHandler = {
    async getAllContent(userId) {
        let content = await ContentService.getAllContent(userId);
        return content;
    }
};

export default ContentHandler;