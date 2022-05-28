import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const mongo_uri = process.env.MONGO_URI;

//connection to mongodb atlas
const dbConnection = async () => {
    try {
        const connection = await mongoose.connect(mongo_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Succesful connection to the database ->  ${connection.connection.host}`);
    } catch (error) {
        console.log('Dataabse connection failed', error.message);
    }
};

export default dbConnection;
