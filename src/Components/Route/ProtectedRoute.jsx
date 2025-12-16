import React from "react";
import { Navigate, Outlet } from "react-router";
import { getToken } from "../../store/api";

const ProtectedRoute = () => {
  const token = getToken();

  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
