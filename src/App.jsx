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
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Page404 from "./components/PageNotFound/Page404";
import AdminElement from "./AdminElement";
import { GoogleOAuthProvider } from "@react-oauth/google";
import About from "./components/About/About";

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GoogleOAuthProvider clientId={`${googleClientId}`}>
          <Nav />
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />} />
              <Route
                path="/add-video"
                element={
                  <AdminElement>
                    <AddVideo />
                  </AdminElement>
                }
              />
              <Route
                path="/edit-video/:id"
                element={
                  <AdminElement>
                    <EditVideo />
                  </AdminElement>
                }
              />
              <Route path="/videoplayer/:id" element={<VideoPlayer />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
          {/* <Footer /> */}
          <ToastContainer autoClose={2000} newestOnTop closeOnClick />
        </GoogleOAuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
