import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        sessionStorage.getItem("isAuthenticated") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/admLogin" />
        )
      }
    />
  );
};

export default ProtectedRoute;
