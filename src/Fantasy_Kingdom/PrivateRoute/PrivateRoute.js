import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  // Reload Return To Login Page Problem Fixed
  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "100px" }}
      >
        <Spinner
          style={{ padding: "100px" }}
          animation="border"
          variant="info"
        />
      </div>
    );
  }

  // Create Private Route
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
