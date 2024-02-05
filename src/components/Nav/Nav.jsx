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

export default function Nav() {
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

          <div>
            {userInfo === null ? (
              path.pathname !== "/sign-in" ? (
                <Link to={"/sign-in"}>
                  <Button variant="contained">Sign In</Button>
                </Link>
              ) : null
            ) : (
              <>
                <Link to={"/"}>
                  <Button variant="outlined">Home</Button>
                </Link>
                <IconButton
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
                  backgroundColor: "#242424", // Set the desired background color
                },
              }}
            >
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
