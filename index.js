
require('dotenv').config();
const express = require('express');

const cors = require('cors');

const {dbConnection}= require('./database/config');

 //Crear el servidor de express

 const app = express();

 //configurar cors

 app.use(cors());


 //Base de Datos
 dbConnection();


//tq6jngDLBkxWuWvk
//main_user


 //Rutas
app.get('/', (req, res) => {

    res.json({
        ok:true,
        msg: 'Hola Mundo'
    });

})


 app.listen( 3000, () => {
     console.log('Servidor corriendo en puerto ' + 3000 );
 });

