import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { logoutReducer } from "../../reduxStore/slices/userAuthSlice";
import { useMediaQuery } from "react-responsive";

export default function Nav() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  let path = useLocation();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userAuth);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAdd = () => {
    navigate("/add-video");
    handleClose();
  };

  const handleLogout = () => {
    dispatch(logoutReducer());
    handleClose();
    navigate("/");
  };

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          position: "absolute",
          height: "55px",
          background: "none",
          // backgroundColor: "rgba(37, 37, 37, 0.35)",
        }}
      >
        <Toolbar>
          <div
            style={{
              flexGrow: 1,
              marginTop: "auto",
            }}
          >
            <NavLink to="/">
              <img
                style={{
                  width: "150px",
                }}
                src="https://fontmeme.com/permalink/240202/0a54a312c4c78f26fbaf566a258ae972.png"
                alt="MEDIATUBE LOGO"
              />
            </NavLink>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "5px",
            }}
          >
            {!isMobile && (
              <Link to={"/about"}>
                <Button
                  sx={{
                    boxShadow:
                      path.pathname === "/sign-in" ||
                      path.pathname === "/sign-up"
                        ? "0 0 5px 5px #42a5f5"
                        : "none",
                  }}
                  variant="outlined"
                >
                  About
                </Button>
              </Link>
            )}

            {userInfo === null ? null : (
              <>
                <Link to={"/"}>
                  <Button variant="outlined">Home</Button>
                </Link>
                <IconButton
                  sx={{ padding: 0, margin: 0 }}
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Avatar>{userInfo?.username.charAt(0).toUpperCase()}</Avatar>
                </IconButton>
              </>
            )}

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ dense: true }}
              PaperProps={{
                sx: {
                  backgroundColor: "#242424",
                },
              }}
            >
              {isMobile && (
                <Link to={"/about"} style={{ textDecoration: "none" }}>
                  <MenuItem
                    sx={{ backgroundColor: "#242424", color: "white" }}
                    onClick={handleAdd}
                  >
                    About
                  </MenuItem>
                </Link>
              )}

              {userInfo?.isAdmin ? (
                <MenuItem
                  sx={{ backgroundColor: "#242424", color: "white" }}
                  onClick={handleAdd}
                >
                  Add Video
                </MenuItem>
              ) : null}

              <MenuItem
                sx={{ backgroundColor: "#242424", color: "white" }}
                onClick={handleLogout}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
