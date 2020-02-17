import React from "react";
import io from "socket.io-client";
import Register from "./Components/Login/register";
import Login from "./Components/Login/login";

import Chat from "./Components/Chat/Chat";
import AuthService from './Services/auth.service';

import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  console.log(AuthService);
  
  // const socket = io('http://localhost:8080/message');
  // socket.on('onMessage', () => {
  //    console.log('connection');
  // } );

  return (
    <>
      <Switch>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route>
          <Redirect from="/" to="register"/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
