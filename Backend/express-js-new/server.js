const express = require('express');

const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));

// Template Engine
app.set('view engine', 'ejs');
app.set('views', __dirname+ './views');
app.use(express.urlencoded());

// Define GET ROUTE
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// Homepage
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home.html');
})

// About page
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
})

app.get('/contactprocess', (req, res) => {
    var no1 = req.query.txt1;
    var no2 = req.query.txt2;
    var c = parseInt(no1) + parseInt(no2);
    res.send("Sum is " + c);
})

app.get('/sum', (req, res) => {
    res.render('sum');
})

app.post('/sumprocess', (req, res) => {
    console.log(req.body);
    var a = req.body.txt1;
    var b = req.body.txt2;
    var c = parseInt(a) + parseInt(b);
    res.render('ans', {mya:a, myb:b, myc:c});
})
// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})