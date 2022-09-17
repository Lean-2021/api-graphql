import UserServices from "../services/user.js";

export default class UserControllers {
  constructor() {
    this.services = new UserServices();
  }
  //obtener todos los usuarios de service
  async allUser() {
    try {
      return await this.services.getAllUser();
    } catch (error) {
      console.log(error);
    }
  }
  // obtener usuario por ID de services
  async userById(id) {
    try {
      return await this.services.getOneUser(id);
    } catch (error) {
      console.log(error);
    }
  }
  //guardar usuario
  async newUser(user) {
    try {
      return await this.services.saveUser(user);
    } catch (error) {
      console.log(error);
    }
  }
  //actualizar usuario
  async userNewData(id, newData) {
    try {
      return await this.services.userUpdate(id, newData);
    } catch (error) {
      console.log(error);
    }
  }
  //borrar usuario
  async userErase(id) {
    try {
      return await this.services.userDelete(id);
    } catch (error) {
      console.log(error);
    }
  }
}
