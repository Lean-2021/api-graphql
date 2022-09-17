import UserDao from "../persistence/dao/UserDao.js";

export default class UserServices {
  constructor() {
    this.userDao = new UserDao();
  }
  async getAllUser() {
    //obtener todos los ususarios de userDao
    try {
      return await this.userDao.findAll();
    } catch (error) {
      console.log(error);
    }
  }
  async getOneUser(id) {
    //obtener usuario por su ID de userDao
    try {
      const usuario = await this.userDao.findOne(id);
      if (!usuario) {
        console.log("No existe un usuario con ese ID");
        return false
      }
      return usuario;
    } catch (error) {
      console.log(error);
    }
  }
  async saveUser(user) {
    //guardar usuario en userDao
    try {
      const usuario = await this.userDao.find(user.email);
      if (usuario) {
        console.log(`El usuario con el email ${user.email} ya existe. Por favor ingrese otro email`);
       return false
      }
        return await this.userDao.createUser(user);
    } catch (error) {
      console.log(error);
    }
  }
  async userUpdate(id, user) {
    //actualizar usuario por ID en userDao
    try {
      const usuario = await this.userDao.findOne(id);
      if (!usuario) {
        console.log("No existe un usuario con ese ID");
        return false
      }
      return await this.userDao.updateUser(id, user);
    } catch (error) {
      console.log(error);
    }
  }
  async userDelete(id) {
    // borrar usuario por ID en de userDao
    try {
      const usuario = await this.userDao.findOne(id);
      if (!usuario) {
        console.log("No existe un usuario con ese ID");
        return false
      }
      return await this.userDao.deleteUser(id);
    } catch (error) {
      console.log(error);
    }
  }
}
