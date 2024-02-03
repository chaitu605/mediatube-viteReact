import React from "react";
import { CircularProgress } from "@mui/material";

export default function ButtonLoader({ size }) {
  return (
    <>
      <CircularProgress size={size ? size : "1.5rem"} />
    </>
  );
}
