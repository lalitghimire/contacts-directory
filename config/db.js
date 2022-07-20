import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const mongo_uri =
    process.env.NODE_ENV === 'test' ? process.env.TEST_MONGO_URI : process.env.MONGO_URI;

//connection to mongodb atlas
const dbConnection = async () => {
    try {
        const connection = await mongoose.connect(mongo_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Succesful connection to the database ->  ${connection.connection.host}`);
    } catch (error) {
        console.log('Database connection failed', error.message);
    }
};

export default dbConnection;
