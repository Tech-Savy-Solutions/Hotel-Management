import React from "react";
import { Navigate } from "react-router-dom";
import { USER_ID_KEY, getStorageItem } from "src/common";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = getStorageItem(USER_ID_KEY);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
