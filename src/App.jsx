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

// import Router from "./routes";

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<ProtectedRoutes />}>
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
      </ThemeProvider>
    </>
  );
}

export default App;
