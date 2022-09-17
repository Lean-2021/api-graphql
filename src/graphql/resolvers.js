import UserControllers from "../user/controllers/user.js";

const user = new UserControllers();

export const resolvers = {
  Query: {
    //obtener todos los usuarios
    users: async () => {
      return await user.allUser();
    },
    user:async(_,{_id})=>{
        return await user.userById(_id);
    }
  },
  Mutation: {
    // crear un usuario
    createUser: async (_, { input }) => {
      return await user.newUser(input);
    },
    //actualizar un usuario
    updateUser: async (_, { _id, input }) => {
      return await user.userNewData(_id, input);
    },
    deleteUser: async (_, { _id }) => {
      return await user.userErase(_id);
    },
  },
};
