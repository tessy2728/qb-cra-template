import React from 'react';
import { Navigate } from "react-router-dom";
import { removeUserSession } from '../../pages/Auth/helper';
const ProtectedRoute = ({
  isSignedIn,
  redirectPath = '/',
  children
}) => {
  if (!isSignedIn()) {
    removeUserSession();
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
export default ProtectedRoute;