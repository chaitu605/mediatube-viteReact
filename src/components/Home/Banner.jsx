import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import testImg from "../../assets/testImg.jpg";
import { getAllVideos } from "../../apiServices/videoApis";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Banner() {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const res = await getAllVideos();
    if (res.success) {
      setVideoData(res.data[Math.floor(Math.random() * res.data.length)]);
    }
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const customButtonStyle = {
    cursor: "pointer",
    color: "white",
    outline: "none",
    border: "none",
    fontWeight: "700",
    borderRadius: "0.2vw",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    marginRight: "1rem",
    marginBottom: "1rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    backgroundColor: "rgba(51, 51, 51, 0.5)",
  };

  return (
    <>
      <div
        style={{
          height: "550px",
          width: "100%",
          color: "white",
          objectFit: "contain",
          backgroundImage: `url(${videoData?.thumbnail})`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          position: "relative",
          // marginBottom: "3rem",
          paddingBottom: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: "10rem",
            backgroundImage:
              "linear-gradient(0deg, transparent,  rgba(37, 37, 37, 0.61), #242424)",
          }}
        ></div>
        <div
          style={{
            paddingLeft: "25px",
          }}
        >
          <div>
            <Typography variant="h4" fontWeight="bold">
              {videoData.title}
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to={`/videoplayer/${videoData._id}`}>
              <button style={customButtonStyle}>Play</button>
            </Link>
            <button style={customButtonStyle}>Genre : {videoData.genre}</button>
          </div>
          <div>
            <Typography
              sx={{
                maxWidth: "360px",
              }}
            >
              {truncate(videoData?.description, 150)}
            </Typography>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: -1,
            width: "100%",
            height: "5rem",
            backgroundImage:
              "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #242424)",
          }}
        ></div>
      </div>
    </>
  );
}
