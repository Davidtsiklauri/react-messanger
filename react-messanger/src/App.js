import React from 'react';
import io from 'socket.io-client';


function App() {

  const socket = io('http://localhost:8080/message');
  socket.on('onMessage', () => {
     console.log('connection');
  } );



  return (
       <input onKeyUp={handler}/>
  );

  function handler( e ) {
      if( e.key === 'Enter' ) {
            socket.emit('onMessage', {
                data: { data: e.target.value }
            });
      }
  } 
}

export default App;
