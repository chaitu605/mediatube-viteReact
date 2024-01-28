import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import ProtectedRoutes from "./protectedRoutes";
// import Router from "./routes";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
