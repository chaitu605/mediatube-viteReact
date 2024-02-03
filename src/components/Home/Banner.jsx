import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import testImg from "../../assets/testImg.jpg";
import { getAllVideos } from "../../apiServices/videoApis";

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

  // function truncate(str, n) {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // }

  return (
    <>
      <div
        style={{
          height: "550px",
          width: "100%",
          color: "white",
          objectFit: "contain",
          backgroundImage: `url(${videoData?.thumbnail})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "1rem",
            backgroundImage:
              "linear-gradient(0deg, transparent,  rgba(37, 37, 37, 0.61), #242424)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "3rem",
            backgroundImage:
              "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #242424)",
          }}
        ></div>
      </div>
    </>
  );
}
