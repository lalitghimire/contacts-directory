import express from 'express';
import contactRouter from './routes/contacts.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
//express setup
const app = express();
app.use(express.json());

const PORT = 4000;
const mongo_uri = process.env.MONGO_URI;

//connection to mongodb atlas
mongoose
    .connect(mongo_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('connection to database sucessful'))
    .catch((error) => console.log('Mongodb connection fail', error.message));

//routes
app.use('/contacts', contactRouter);

// listen to the server
app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`);
});
