import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          position: "absolute",
          height: "55px",
          background: "transparent",
          backgroundColor: "rgba(37, 37, 37, 0.35)",
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
          <Typography>
            {/* <Button color="inherit">Home</Button> */}
            <Button variant="contained">Sign In</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
