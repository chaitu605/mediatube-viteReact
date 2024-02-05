import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { getVideosById } from "../../apiServices/videoApis";
import { useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import ButtonLoader from "../Loader/ButtonLoader";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Comment from "./Comment";
import LikeDislike from "./LikeDislike";
import { getComments } from "../../apiServices/commentApis";

export default function VideoPlayer() {
  const { id } = useParams();
  const [video, setVideo] = useState("");
  const [commentLists, setCommentLists] = useState([]);
  const [loading, setLoading] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : true);
  };

  useEffect(() => {
    fetchVideoById();
    fetchComments();
  }, [id]);

  const fetchVideoById = async () => {
    setLoading(true);
    const res = await getVideosById(id);

    if (res.success) {
      setVideo(res.data);
    }
    setLoading(false);
  };

  const fetchComments = async () => {
    const videoIdObj = {
      videoId: id,
    };
    const res = await getComments(videoIdObj);

    if (res.success) {
      setCommentLists(res.data);
    } else {
      console.error("Failed to get comments");
    }
  };

  const updateComment = (newComment) => {
    setCommentLists(commentLists.concat(newComment));
  };

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&::before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={
        <ArrowForwardIosSharpIcon sx={{ color: "white", fontSize: "0.9rem" }} />
      }
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  return (
    <>
      <div
        style={{
          height: "100%",
          background: "#242424",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <Nav /> */}
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ButtonLoader size={"3rem"} />
          </div>
        ) : (
          <Container maxWidth="xl" sx={{ marginTop: "6rem" }}>
            <Grid
              sx={{
                marginBottom: "1rem",
                height: { xs: "15rem", md: "35rem" },
              }}
            >
              <ReactPlayer
                width="100%"
                height="100%"
                playing={true}
                controls={true}
                url={`https://youtube.com/watch?v=${video.videoId}`}
              />
            </Grid>
            <div
              style={{
                marginBottom: "0.5rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ maxWidth: "70%" }}>
                <Typography variant="h6" fontWeight="bold">
                  {video.title}
                </Typography>
              </div>

              <LikeDislike videoId={id} />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <Accordion
                sx={{ backgroundColor: "#242424", color: "white" }}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{video.description}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div>
              <Comment
                commentLists={commentLists}
                postId={id}
                refreshFunction={updateComment}
              />
            </div>
          </Container>
        )}
      </div>
    </>
  );
}
