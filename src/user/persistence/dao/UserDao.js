import User from "../models/User.js";

export default class UserDao {
  constructor() {
    this.model = User;
  }
  //muestra todos los usuarios
  async findAll() {
    try {
        return await this.model.find();
    } catch (error) {
        console.log(error);
        throw new Error('No se pudieron obtener todos los usuarios');
    }
  }
  async find(search){
    try {
      return await this.model.findOne({email:search})
    } catch (error) {
      throw new Error('No se puede encontrar el usuario');
    }
  }
  // mostrar usuario por ID
  async findOne(id) {
    try {
        return await this.model.findById(id);
    } catch (error) {
        console.log(error);
        throw new Error (`No existe un usuario con el id: ${id}`);
    }
  }
  // crear usuario
  async createUser(user) {
    try {
        const newUser= new this.model(user);
        return await newUser.save();
    } catch (error) {
        console.log(error);
        throw new Error('No se pudo guardar el usuario');
    }
  }
  //actualizar usuario
  async updateUser(id, user) {
    try {
        return this.model.findByIdAndUpdate(id, user, { new: true });
    } catch (error) {
        console.log(error)
        throw new Error('No se pudo actualizar el usuario. Error con los datos a actualizar');
    }
  }
  // borrar usuario por ID
  async deleteUser(id) {
    try {
        return await this.model.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('No se pudo eliminar el usuario');
    }
  }
}
