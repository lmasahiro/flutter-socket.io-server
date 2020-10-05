const {io}= require('../index.js');


// mensajes de sockets
io.on('connection', client=>{
    console.log('cliente conectado');

    client.on('disconnect', ()=>{
        console.log('cliente desconectado');
    });

    // escucha mensajes
    client.on('mensaje', (payload)=>{
        console.log('Mensaj!!!!!!', payload);
        // emitir mensajes
        io.emit('mensaje', {admin:'NUEVO MENSAJE'});
    });



});
