import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [user, loading, error] = useAuthState(auth);

  console.log("proteced route");
  if (loading) {
    return <div>loading ...</div>;
  }

  if (!user) {
    return <Navigate to={"/"} />;
  }

  return <div>{children}</div>;
}

export default ProtectedRoute;
