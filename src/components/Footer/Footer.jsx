import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div style={{ border: "1px solid red" }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography>Help</Typography>
              </Box>
              <Typography>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Typography>
              <Typography>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Typography>
              <Typography>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography>Account</Typography>
              </Box>
              <Typography>
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Typography>
              <Typography>
                <Link href="/" color="inherit">
                  Register
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography>FAQ</Typography>
              </Box>
              <Typography>
                <Link href="/" color="inherit">
                  Legal Notices
                </Link>
              </Typography>
              <Typography>
                <Link href="/" color="inherit">
                  Terms of Use
                </Link>
              </Typography>
              <Typography>
                <Link href="/" color="inherit">
                  History
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Box textAlign="center">
            <Typography>
              Mediatube India &reg;{new Date().getFullYear()}
            </Typography>
          </Box>
        </div>
      </footer>
    </>
  );
}
