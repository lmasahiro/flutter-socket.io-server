/**
 * para inicializar npm init -y
 * npm i express
 * para iniciar el servidor node index
 * para instalar nodemon para refrescar cambios en express. sudo npm i -g nodemon
 * para variables de entorno.  npm i dotenv
 */


const express = require('express');
const path = require('path');
require('dotenv').config();

// app de express
const app = express();

// node server para la parte del socket
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket.js');


// paht publico
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));




server.listen(process.env.PORT, (err)=>{
    if (err) throw new Error(err);

    console.log('Servidor corriendo en puerto kjaksdjfkjas', process.env.PORT);
});
