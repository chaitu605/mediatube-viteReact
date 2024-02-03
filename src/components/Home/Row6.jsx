import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonLoader from "../Loader/ButtonLoader";
import { getVideosByGenre } from "../../apiServices/videoApis";

export default function Row6({ responsive }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideosByGenre();
  }, []);

  const fetchVideosByGenre = async () => {
    const res = await getVideosByGenre("Romance");

    if (res.success) {
      setVideos(res.data);
    }
  };

  const handleClick = () => {};

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          color: "white",
          height: "230px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Romance
        </Typography>
        {videos !== null && videos.length ? (
          <Carousel responsive={responsive} swipeable={true}>
            {videos.map((item) => (
              <div style={{ overflow: "hidden" }} key={item._id}>
                <img
                  style={{
                    margin: "6px",
                    width: "280px",
                    height: "180px",
                    padding: "5px",
                    transition: "transform 450ms",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.08)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                  onClick={() => handleClick(item._id)}
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <ButtonLoader />
        )}
      </Container>
    </>
  );
}
