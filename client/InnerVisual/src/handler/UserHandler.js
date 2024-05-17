import UserService from '../services/UserService'
export const UserHandler = {
    async getUser() {
        let user = await UserService.getUser();
        return user;
    },
    async getAlltUsers() {
        let allUsers = await UserService.getAlltUsers();
        return allUsers;
    },
    async postUser(newUser) {
        return UserService.postUser(newUser).then((response) => {
            if (response.status === 200) {
                console.log(response.data);
            } else {
                throw new Error('Error al enviar el usuario');
            }
        });
    },
    async updateUser(id, updatedUser) {
        try {
            return await UserService.updateUser(id, updatedUser);
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
            throw error;
        }
    },
    async handleDelete(id) {
        const userToDelete = {
            id_user: id
        };
        await UserService.deleteUser(userToDelete);
    }
}
export default UserHandler;


























