// //Abrir servido en un puerto
// const express = require('express');//Version de common js

import express from 'express';//Version de ES module js
import router from './routes/index.js'
import db from './config/db.js'





const app = express();

//Conectar base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch(error => console.log(error))


//DEFINIMOS EL PUERTO
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine','pug');

//Obtener el año actual
app.use((req,res,next)=>{
    const year = new Date()
    res.locals.actualYear = year.getFullYear()
    res.locals.nombresitio = 'Agencia de Viajes'
    next()
})

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended:true}));



//Definir la carpeta publica
app.use(express.static('public'))


//AGREGAR ROUTER
app.use('/',router); // use soporta todos los verbos get,post,delete etc..

app.listen(port,()=>{
    console.log(`Els ervidor esta funcionando en el puerto ${port}`)
})