//Import express file
import express from 'express';

//Create an express application
const app = express();

//Define a port number where server will listen 
const PORT = 3000;

//Enable static file serving 
app.use(express.static('public'));

//Define out main root ('/')
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

//Start server
app.listen(PORT, () => {
    console.log(`Server is running gloriously at http://localhost:${PORT}`);
});