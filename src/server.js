import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import dotenv from 'dotenv';
import schema from './graphql/schema.js';
import {connectedDB} from './helpers/configDB.js';
dotenv.config(); //utilizacion de variables de entorno

const app =express();
const PORT = process.env.port || 8081;  //puerto local del servidor
connectedDB();  //conectar a base de datos Mongo DB

//utilizacion de graphql con su interfaz gráfica en la ruta http://localhost:8082/api/graphql
app.use('/api/graphql',graphqlHTTP({
    schema,
    graphiql:true,
}));

//levantar servidor
app.listen(PORT,()=>{
    console.log(`Server on port ${PORT} ✈🚀🚀...`);
})

