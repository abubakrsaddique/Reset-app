import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function PrivateRoute({ path, element, ...props }) {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    if (path === "/login") {
      return <Navigate to="/dashboard" />;
    } else {
      return <Route path={path} element={element} {...props} />;
    }
  } else {
    if (path === "/login") {
      return <Route path={path} element={element} {...props} />;
    } else {
      return <Navigate to="/login" />;
    }
  }
}

export default PrivateRoute;
