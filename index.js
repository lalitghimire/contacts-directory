import app from './app.js';
const PORT = process.env.PORT || 4000;

// listen to the server
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});
