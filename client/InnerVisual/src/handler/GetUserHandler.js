import GetUserService from '../services/GetUserService'

export const UserHandler = {

    async getUser() {
        let user = await GetUserService.getUser();
        return user;
    }
}
export default UserHandler;