import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return (
      <>
        <span className="loading loading-spinner loading-xl"></span>
      </>
    );
  }

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
}

export default PrivateRoute;
