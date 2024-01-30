import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import bgImage from "../../assets/bgImage.jpg";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleInputChange = () => {};

  const submitData = () => {};

  return (
    <>
      <div
        style={{
          height: "100%",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            // height="100%"
            align="center"
            justifyContent="center"
            alignItems="center"
          >
            <Container>
              <Typography variant="h3" fontWeight="bold">
                Unlimited movies, TV <br /> Shows and more.
              </Typography>
              <Typography>
                Ready to watch? Register yourself and u can explore.
              </Typography>
            </Container>
            <Paper
              elevation={20}
              sx={{
                // height: "100%",
                width: 400,
                opacity: "85%",
                padding: "20px 20px",
              }}
            >
              <form onSubmit={handleSubmit(submitData)}>
                <Grid container rowSpacing={1}>
                  <Grid item xs={12}>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                    {/* <Typography variant="h4" fontWeight="bold">
                      Please fill this form to create an account
                    </Typography> */}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Username"
                      variant="outlined"
                      fullWidth
                      required
                      {...register("username", { required: true })}
                      onChange={handleInputChange}
                      type="text"
                      name="username"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleInputChange}
                      type="email"
                      name="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Password"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleInputChange}
                      type="passwprd"
                      name="password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      endIcon={<ExitToAppRoundedIcon />}
                    >
                      Sign Up
                    </Button>
                    <div>
                      By signing up, you agree to the
                      <a href="/"> Terms of Service </a>
                      and
                      <a href="/"> Privacy Policy</a>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      Already have an account?
                      <span>
                        {" "}
                        <Link
                          style={{ fontWeight: "bold", color: "inherit" }}
                          to="/sign-in"
                        >
                          {" "}
                          Sign In.
                        </Link>
                      </span>
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </div>
      </div>
    </>
  );
}
