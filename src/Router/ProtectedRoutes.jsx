import { Navigate } from "react-router-dom";
import { useContext } from "react";
import LoginContext from "../Context/LoginContext";
import React from 'react'

function ProtectedRoutes({ children }) {
  const { logged } = useContext(LoginContext);

  if (logged) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
export default ProtectedRoutes;
