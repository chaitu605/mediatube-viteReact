import React from "react";
import page404 from "../../assets/page404.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          rowGap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <img
            style={{
              padding: "1rem",
              borderRadius: "50%",
              width: "400px",
              height: "350px",
            }}
            src={page404}
            alt={"404Image"}
          />
        </div>
        <Link to={"/"}>
          <Button variant="outlined">Back To Home</Button>
        </Link>
      </div>
    </>
  );
}
