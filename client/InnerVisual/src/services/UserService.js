import axios from "axios";
const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
export const GetUserService = {
    async getUser() {
        try {
            let response = await apiClient.get("/user_admin/get_user");
            let allUsers = response.data;
            return allUsers;
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
        }
    }
    }

export default GetUserService;