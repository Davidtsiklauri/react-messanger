const app = require('./app');
const http = require('http').createServer(app);
const io = require( "socket.io" )( http );

http.listen( 8080, () => console.log( 'port', '8080' ));


io.of('message')
    .on('connection',function(socket){ 
        console.log('connected'); 
        socket.on('onMessage', ( data ) => {
            io.emit( 'recive', data )
        })
});