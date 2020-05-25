import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { Login } from "./Login";

function PrivateRoute({ component: Component, ...rest }) {
  const { authTokens } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        authTokens.accessToken ? <Component {...props} {...rest} /> : <Login />
      }
    />
  );
}

export default PrivateRoute;
