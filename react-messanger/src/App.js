import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Register from "./Components/Login/register";
import Login from "./Components/Login/login";

import Chat from "./Components/Chat/Chat";
import AuthService from "./api/auth.service";
import AuthenticatedRoute from "./Components/shared/Components/AuthenticatedRoute";

import { Route, Switch } from "react-router-dom";

function App() {
  const isauthenticated = AuthService.isauthenticated();
  const [isAuth, setState] = useState(isauthenticated);

  useEffect(() => {
    setState(isauthenticated);
  }, [isauthenticated]);

  const socket = io("http://localhost:3300", {
    transports: ["websocket"],
    query: {
      convId: "4234324",
    },
  });
  socket.emit("message", { gia: "gia", convId: "4234324" });
  socket.emit("message", { gia: "gia", convId: "4234324" });
  socket.emit("message", { gia: "gia", convId: "4234324" });
  socket.emit("message", { gia: "gia", convId: "4234324 " });

  return (
    <>
      <Switch>
        <AuthenticatedRoute
          component={Register}
          isAuth={!isAuth}
          path="/register"
          rederict="/chat"
        />

        <AuthenticatedRoute
          component={Login}
          isAuth={!isAuth}
          path="/"
          exact={true}
          rederict="/chat"
        />

        <AuthenticatedRoute
          component={Chat}
          isAuth={isAuth}
          path="/chat"
          rederict="/"
        />

        <Route path="*">
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
