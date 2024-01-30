import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div>
        <AppBar
          elevation={0}
          sx={{
            height: "55px",
            background: "none",
            backgroundColor: "rgba(37, 37, 37, 0.35)",
          }}
        >
          <Toolbar>
            <div style={{ flexGrow: 1 }}>
              <Link to="/">
                <img
                  style={{
                    width: "150px",
                  }}
                  src="https://fontmeme.com/permalink/240130/227e9975aca1e1d561781a1b598ef93a.png"
                  alt="MEDIATUBE LOGO"
                />
              </Link>
            </div>
            <Typography>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Sign In</Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
