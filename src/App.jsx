import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ProtectedRoutes from "./protectedRoutes";
import AddVideo from "./components/AddVideo/AddVideo";
import EditVideo from "./components/EditVideo/EditVideo";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Router from "./routes";

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route index path="/" element={<Home />} />
            <Route path="/add-video" element={<AddVideo />} />
            <Route path="/edit-video" element={<EditVideo />} />
          </Route>

          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        {/* <Footer /> */}
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
