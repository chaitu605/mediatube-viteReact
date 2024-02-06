import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "./components/Nav/Nav";

export default function ProtectedRoutes() {
  const { userInfo } = useSelector((state) => state.userAuth);
  return <>{userInfo !== null ? <Outlet /> : <Navigate to={`/signin`} />}</>;
}
