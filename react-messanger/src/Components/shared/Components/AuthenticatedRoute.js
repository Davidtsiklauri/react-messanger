import React from "react";
import { Route, Redirect } from "react-router-dom";

function AuthenticatedRoute({
  component: Component,
  isAuth,
  rederict,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={() => (isAuth ? <Component /> : <Redirect to={rederict} />)}
    />
  );
}

export default AuthenticatedRoute;
