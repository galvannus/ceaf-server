const express = require('express');
const connectDB = require('./config/db');

//Create server
const app = express();

//Connect to the DB
connectDB();

//Enable express.json
app.use(express.json({ extended: true }));

//Port of the app
const PORT = process.env.PORT || 4000;

//Importar rutas
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/payments', require('./routes/payments'));

//Run app
app.listen(PORT, () => {
    console.log(`El servidor funciona en el puerto ${PORT}`);
})