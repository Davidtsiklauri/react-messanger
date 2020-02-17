const app = require('./app'),
      db = require('config').get('mongoURI'),
      server  = app.listen( 8080, () => console.log( 'port', '8080' )),
      mongoose = require('mongoose')

// db    
mongoose
.connect(db, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, autoIndex: false })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))
      
// Sockets    
io = require( "socket.io" )( server );

io.of('message')
    .on('connection',function(socket){ 
        console.log('connected'); 
        socket.on('onMessage', ( data ) => {
            io.emit( 'recive', data )
        })
});