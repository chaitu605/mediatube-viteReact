import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AdminElement({ children }) {
  const { userInfo } = useSelector((state) => state.userAuth);

  return <>{userInfo.isAdmin ? children : <Navigate to={`/`} />}</>;
}
