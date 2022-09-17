import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


export const connectedDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CNN,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Connected to Database Mongo DB 😎😎😎')
    } catch (error) {
        console.log('Error de conexión a la base de datos ',error);
    }
}