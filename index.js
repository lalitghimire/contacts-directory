import express from 'express';
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('Server is setup');
});

// listen to the server
app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`);
});
