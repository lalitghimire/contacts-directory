import express from 'express';
import contactRouter from './routes/contacts.js';
const app = express();
const PORT = 4000;

app.use(express.json());
app.use('/contacts', contactRouter);

// listen to the server
app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`);
});
