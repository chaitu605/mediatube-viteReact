import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Register from "./components/Register/Register";
// import Router from "./routes";

function App() {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />

        {/* private routes */}
      </Routes>
    </>
  );
}

export default App;
