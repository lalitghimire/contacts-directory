import express from 'express';
import contactRouter from './routes/contacts.js';
import dotenv from 'dotenv';
import dbConnection from './config/db.js';
import cors from 'cors';
dotenv.config();

// connect to database
dbConnection();

//express setup
const app = express();
app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));

//routes
app.use('/contacts', contactRouter);

export { app };
