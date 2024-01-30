import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import bgImage from "../../assets/bgImage.jpg";

export default function SignIn() {
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
                      <LockIcon />
                    </Avatar>
                    <Typography variant="h4" fontWeight="bold">
                      Sign In
                    </Typography>
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
                      label="Password"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleInputChange}
                      type="password"
                      name="password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" fullWidth>
                      Sign In
                      <span>
                        <LockOpenIcon />
                      </span>
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
      </div>
    </>
  );
}
