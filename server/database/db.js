import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async() =>{
    const URL=  `mongodb+srv://${USERNAME}:${PASSWORD}@flipkart.cmfnnm2.mongodb.net/`
    // const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@socialmedia.3nl5wz4.mongodb.net/`
    try{
       await  mongoose.connect(URL, {
        useNewUrlParser:true,
    });
        console.log('Database Connected Successfully');

    }catch(error){
        console.log('Error while Connecting with the database ', error.message);
    }
}

export default Connection;

