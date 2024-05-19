import axios from "axios";
const apiClient = axios.create({
    baseURL: "http://127.0.0.1:5000",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
export const UserService = {
    async getUser() {
        try {
            let response = await apiClient.get("/user_admin/get_user");
            let allUsers = response.data;
            return allUsers;
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
        }
    },
    async postUser(newUser) {
        try {
            return await apiClient.post("/user_client/post_user", newUser);
        } catch (error) {
            console.error("Error al enviar el usuario:", error);
        }
    },
    async updateUser(id, updatedUser) {
        try {
            return await apiClient.patch(
                `/user_client/update_user/${id}`,
                updatedUser
            );
        } catch (error) {
            console.error("Error updating user:", error);
            throw error;
        }
    },
    async deleteUser(id) {
        try {
            return await apiClient.delete("/user_client/delete_user/", { data: id });
        } catch (error) {
            console.error("Error al eliminar el usuario:", error);
        }
    },
    async getAlltUsers() {
        try {
            let response = await apiClient.get("/user_client/get_user");
            let allUsers = response.data;
            return allUsers;
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
        }
    },
};
export default UserService;