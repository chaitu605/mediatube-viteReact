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
  Box,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../../assets/bgImage.jpg";
import Nav from "../Nav/Nav";
import { toast } from "react-toastify";
import { signUp } from "../../apiServices/authApis";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ButtonLoader from "../Loader/ButtonLoader";

export default function SignUp() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const handleVisible = () => {
    setVisible((prev) => !prev);
  };

  const submitData = async () => {
    setLoading(true);
    const userData = {
      email: email,
      username: username,
      password: password,
    };
    const result = await signUp(userData);

    if (result.success) {
      toast.dismiss();
      navigate("/sign-in");
      toast.success(`${result.message}`);
    } else {
      toast.error(`${result.message}`);
    }
    setLoading(false);
  };

  return (
    <>
      <div
        style={{
          height: "100%",
          backgroundImage: `url(${bgImage})`,
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
          <Nav />
          <Grid
            // flexDirection="column"
            // height="100%"
            align="center"
            justifyContent="center"
            alignItems="center"
          >
            <Box sx={{ marginBottom: "1rem" }}>
              <Typography variant="h4" fontWeight="bold">
                Latest Movie Trailers
              </Typography>
              <Typography>
                Ready to watch? Register yourself and u can explore.
              </Typography>
            </Box>
            <Paper
              elevation={20}
              sx={{
                // height: "100%",
                maxWidth: 400,
                opacity: "75%",
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
                      label="Username"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleInputChange}
                      type="text"
                      name="username"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Password"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleInputChange}
                      type={visible ? "text" : "password"}
                      name="password"
                      InputProps={{
                        endAdornment: (
                          <IconButton onClick={() => handleVisible()}>
                            {visible ? (
                              <VisibilityIcon />
                            ) : (
                              <VisibilityOffIcon />
                            )}
                          </IconButton>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      disabled={loading}
                      // endIcon={<ExitToAppRoundedIcon />}
                    >
                      {loading ? <ButtonLoader /> : "Sign Up"}
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
