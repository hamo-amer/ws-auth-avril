import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Load from "../components/Load";

function PrivateRoute({ children }) {
  const auth = useSelector(state => state.authReducer.auth);
  const loading = useSelector(state => state.authReducer.loading);
  const token = localStorage.getItem("token");
  return (
    <>
      {loading ? <Load /> : auth && token ? children : <Navigate to='/login' />}
    </>
  );
}

export default PrivateRoute;
