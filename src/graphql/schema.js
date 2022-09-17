import {makeExecutableSchema} from '@graphql-tools/schema';
import {resolvers} from './resolvers.js';

const typeDefs=`
type Query{
    users:[User]
    user(_id:ID):User
}

type User{
    _id:ID
    firstname:String!
    lastname:String
    email:String!
    password:String!
    phone:Int
    age:Int
}

type Mutation {
    createUser(input:UserInput):User
    updateUser(_id:ID,input:UpdateInput):User
    deleteUser(_id:ID):User
}

input UserInput{
    firstname:String!
    lastname:String
    email:String!
    password:String!
    phone:Int
    age:Int
}
input UpdateInput{
    firstname:String
    lastname:String
    email:String
    password:String
    phone:Int
    age:Int
}
`;

export default makeExecutableSchema({
    typeDefs,
    resolvers
})