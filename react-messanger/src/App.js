import React from 'react';
import io from 'socket.io-client';
import Login  from './Components/Login/login';

import { 
  BrowserRouter as Router, 
  Route,  
  Switch,
  Redirect
 } from "react-router-dom";


function App() {

  // const socket = io('http://localhost:8080/message');
  // socket.on('onMessage', () => {
  //    console.log('connection');
  // } );

  return (
    <Switch>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route>
        <Redirect from="/"  to="login"/>
      </Route>
    </Switch>
  );
}

export default App;
