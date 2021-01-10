import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { UserContext } from "../UserContext";

const ProtectedRoute = (props) => {
  const { logged } = useContext(UserContext);
  if (logged === true) return <Route {...props} />;
  else if (logged === false) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
