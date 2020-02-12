const app = require('./app');

const server  = app.listen( 8080, () => console.log( 'port', '8080' ));

io = require( "socket.io" )( server );


io.of('message')
    .on('connection',function(socket){ 
        console.log('connected'); 
        socket.on('onMessage', ( data ) => {
            io.emit( 'recive', data )
        })
});