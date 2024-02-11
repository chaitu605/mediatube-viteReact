import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          height: "100%",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            padding: "1rem",
            backgroundColor: "inherit",
            color: "white",
            boxShadow: "0 0 10px 10px #42a5f5",
          }}
        >
          <Box sx={{ marginBottom: "1rem", textAlign: "center" }}>
            <Typography fontWeight="bold">
              This is a MERN stack Web App
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "5px",
              marginBottom: "1rem",
            }}
          >
            <Typography>Functionalities/Features :-------</Typography>
            <Typography sx={{ fontWeight: "100" }}>
              • Role based Access and Routing.
            </Typography>
            <Typography>
              • User have to SignUp/SignIn to view latest Movie/Shows Trailers.
            </Typography>
            <Typography>
              • User can Like, Dislike, and leave Comments on Videos which can
              be seen by other users.
            </Typography>
            <Typography>
              • Only Admin can Add new videos, Update and Delete any videos.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", rowGap: "5px" }}>
            <Typography>Admin Testing Credentials :-------</Typography>
            <Typography>Email: admin@gmail.com</Typography>
            <Typography>Username: admin</Typography>
            <Typography>Password: Admin@123</Typography>
          </Box>
        </Card>
      </Container>
    </>
  );
}
