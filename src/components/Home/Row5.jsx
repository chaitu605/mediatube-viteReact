import React, { useEffect, useState } from "react";
import { Container, IconButton, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonLoader from "../Loader/ButtonLoader";
import { deleteVideo, getVideosByGenre } from "../../apiServices/videoApis";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Row5({ responsive, checked }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideosByGenre();
  }, []);

  const fetchVideosByGenre = async () => {
    setLoading(true);
    const res = await getVideosByGenre("Horror");

    if (res.success) {
      setVideos(res.data);
    }
    setLoading(false);
  };

  const handleDelete = async (item) => {
    const parts = item.thumbnail.split("/");

    // Find the index of 'thumbnails' in the array
    const index = parts.indexOf("thumbnails");

    if (index !== -1 && index + 1 < parts.length) {
      // extracted id frm thumbnail url and removed .jpg extension for cloudinary publicID
      const extractedId = parts
        .slice(index, index + 2)
        .join("/")
        .split(".")[0];

      const videoObj = {
        id: item._id,
        cloudinaryId: extractedId,
      };

      const deleteRes = await deleteVideo(videoObj);

      if (deleteRes.success) {
        fetchVideosByGenre();
        toast.success(`${deleteRes.message}`);
      } else {
        toast.error(`${deleteRes.message}`);
      }
    } else {
      console.error("Unable to extract ID from thumbnail URL");
      toast.error(`Something went wrong`);
    }
  };

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          color: "white",
          height: "230px",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Horror
        </Typography>
        {loading ? (
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <ButtonLoader />
          </div>
        ) : videos.length === 0 ? (
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            marginTop="2rem"
          >
            Not available
          </Typography>
        ) : (
          <Carousel responsive={responsive} swipeable={true}>
            {videos.map((item) => (
              <div
                style={{
                  overflow: "hidden",
                  textAlign: "center",
                }}
                key={item._id}
              >
                {checked && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(item)}
                    >
                      <DeleteIcon />
                    </IconButton>

                    <Link to={`/edit-video/${item._id}`} state={item}>
                      <IconButton color="info">
                        <EditIcon />
                      </IconButton>
                    </Link>
                  </div>
                )}
                <Link to={`/videoplayer/${item._id}`}>
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
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                  />
                </Link>
              </div>
            ))}
          </Carousel>
        )}
      </Container>
    </>
  );
}
