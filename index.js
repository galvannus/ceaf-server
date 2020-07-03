const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
//const User = require('./models/User');
const path = require('path');
const pdf = require('html-pdf');
const pdfTemplate = require('./documents/index');



//Create server
const app = express();

//Connect to the DB
connectDB();

//Habilitar cors
app.use(cors());

//Enable express.json
app.use(express.json({ extended: true }));

//Port of the app
const PORT = process.env.PORT || 4000;

//Importar rutas
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/payments', require('./routes/payments'));
app.use('/api/students', require('./routes/students'));

app.use(express.static(path.join(__dirname, 'ceaf-client', 'build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'ceaf-client' ,'build', 'index.html'));
  });


//Generation of pdf
app.post('/create-pdf', (req, res) => {
    //console.log(req.body);
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (error) => {
        if(error) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
});

//Send de pdf to the client
app.get('/fetch-pdf', (req,res) => {
    res.sendFile(`${__dirname}/result.pdf`);
});

//Run app
app.listen(PORT,() => {
    console.log(`El servidor funciona en el puerto ${PORT}`);
});


/*
let user = new User({
    name: 'sistemas',
    email: 'demonwacho@hotmail.com',
    password: '$2a$10$h3YoLoQwMzjIKYrNZBqL2OokeuHyR9JvmjZJ8gsW5NHehXSDvRwD2'
});

if(user) {
    //Save user
    user.save();
}
*/

