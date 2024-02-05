import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../../assets/bgImage.jpg";
import Nav from "../Nav/Nav";
import { signIn } from "../../apiServices/authApis";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginReducer } from "../../reduxStore/slices/userAuthSlice";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ButtonLoader from "../Loader/ButtonLoader";

export default function SignIn() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userAuth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else setPassword(value);
  };

  const handleVisible = () => {
    setVisible((prev) => !prev);
  };

  const submitData = async (e) => {
    setLoading(true);
    const userData = {
      email: email,
      password: password,
    };
    const result = await signIn(userData);

    if (result.success) {
      toast.dismiss();
      dispatch(loginReducer(result.data));
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
          background: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Nav />

        <Grid
          container
          // height="100%"
          align="center"
          justifyContent="center"
          alignItems="center"
        >
          <Paper
            elevation={20}
            sx={{
              height: "100%",
              maxWidth: 400,
              opacity: "75%",
              padding: "20px 20px",
            }}
          >
            <form onSubmit={handleSubmit(submitData)}>
              <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                  <Avatar>
                    <LockIcon />
                  </Avatar>
                  <Typography variant="h4" fontWeight="bold">
                    Sign In
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="off"
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
                    autoComplete="off"
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
                          {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    fullWidth
                  >
                    {loading ? <ButtonLoader /> : "Sign In"}
                    {/* <span>
                      <LockOpenIcon />
                    </span> */}
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    New to <span>MEDIATUBE</span> ?
                    <span>
                      {" "}
                      <Link
                        style={{ fontWeight: "bold", color: "inherit" }}
                        to="/sign-up"
                      >
                        {" "}
                        Sign Up now.
                      </Link>
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </div>
    </>
  );
}
