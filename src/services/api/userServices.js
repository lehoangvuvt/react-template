import BaseService from "./baseAxios"

const UserServices = {
  async login(username, password) {
    const data = {
      userNameOrEmail: username,
      password,
    }
    const response = await BaseService.post("auth/sign-in", data)
    if (response.status === 201) {
      return response.data
    }
  },
};

export default UserServices;
