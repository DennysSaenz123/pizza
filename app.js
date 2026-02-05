//Import express file
import express from 'express';

//Create an express application
const app = express();

//Define a port number where server will listen 
const PORT = 3000;

//Enable static file serving 
app.use(express.static('public'));

//Add middlwware that allow express to read from data and store it in req.body
app.use(express.urlencoded({ extended: true}));

//Create a temp array to store orders
const orders = [];

//Define out main root ('/')
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

//Conctact route 
app.get('/contact-us', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/contact.html`);
});

//Thank you route 
app.get('/thank-you', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/thanks.html`);
});

//submit order route 
app.post('/submit-order', (req, res) => {

    const order = {
        fname: req.body.fname,
        lname: req.body.lname,
        toppings: req.body.toppings,
        email: req.body.email,
        size: req.body.size,
        method: req.body.method,
        comment: req.body.comment,
        timestamp: new Date()
    };

    //Add order to array 

    orders.push(order);

    res.sendFile(`${import.meta.dirname}/views/submit.html`);
});

//Admin route 
app.get('/admin', (req, res) => {
    res.send(orders);
});

//Start server
app.listen(PORT, () => {
    console.log(`Server is running gloriously at http://localhost:${PORT}`);
});