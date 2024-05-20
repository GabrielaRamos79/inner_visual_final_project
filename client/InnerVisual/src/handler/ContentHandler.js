import ContentService from "../services/ContentService";

export const ContentHandler = {
    
    async getAllContent() {
        let content = await ContentService.getAllContent();
        return content;
    },
    
    async getContentById(id) {
        let contentOne = await ContentService.getContentById(id);
        return contentOne;
    } 
}

export default ContentHandler;