'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;


mongoose.connect('mongodb://localhost:27017/curso', { useNewUrlParser: true, useUnifiedTopology: true })
 .then(()=>{
       console.log("La base de datos esta funcionando muy bien...");

       app.listen(port,function () {
           console.log("Servidor del api rest de musica escuchando en http://localhost"+':'+port);
       });

 })
 .catch( err => console.log(err) );









