import React from "react";
import { authService } from "./services/AuthService";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = authService.isLoggedIn();

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};
