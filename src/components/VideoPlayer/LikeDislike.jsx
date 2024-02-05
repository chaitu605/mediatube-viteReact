import { IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import {
  getDislikes,
  getLikes,
  unDislike,
  unLike,
  upDislike,
  upLike,
} from "../../apiServices/likeApis";

export default function LikeDislike(props) {
  const user = useSelector((state) => state.userAuth);

  const [Likes, setLikes] = useState(0);
  const [Dislikes, setDislikes] = useState(0);
  const [LikeAction, setLikeAction] = useState(null);
  const [DislikeAction, setDislikeAction] = useState(null);

  const variable = {
    videoId: props.videoId,
    userId: user.userInfo.userId,
  };

  useEffect(() => {
    fetchLikes();
    fetchDisLikes();
  }, []);

  const fetchLikes = async () => {
    const likeRes = await getLikes(variable);

    if (likeRes.success) {
      setLikes(likeRes.data.length);
      likeRes.data.map((like) => {
        if (like.userId === user.userInfo.userId) {
          setLikeAction("liked");
        }
      });
    } else {
      console.error("Failed to get likes");
    }
  };

  const fetchDisLikes = async () => {
    const disLikeRes = await getDislikes(variable);

    if (disLikeRes.success) {
      setDislikes(disLikeRes.data.length);
      disLikeRes.data.map((dislike) => {
        if (dislike.userId === user.userInfo.userId) {
          setDislikeAction("disliked");
        }
      });
    } else {
      console.error("Failed to get dislikes");
    }
  };

  const onLike = async () => {
    if (LikeAction === null) {
      const upLikeRes = await upLike(variable);
      if (upLikeRes.success) {
        setLikes((prev) => prev + 1);
        setLikeAction("liked");
        //If dislike count is already present
        if (DislikeAction !== null) {
          setDislikeAction(null);
          setDislikes((prev) => prev - 1);
        }
      } else {
        console.error("Failed to increase the like");
      }
    } else {
      const unLikeRes = await unLike(variable);
      if (unLikeRes.success) {
        setLikes((prev) => prev - 1);
        setLikeAction(null);
      } else {
        console.error("Failed to decrease the like");
      }
    }
  };

  const onDislike = async () => {
    if (DislikeAction !== null) {
      const unDislikeRes = await unDislike(variable);
      if (unDislikeRes.success) {
        setDislikes((prev) => prev - 1);
        setDislikeAction(null);
      } else {
        console.error("Failed to decrease dislike");
      }
    } else {
      const upDislikeRes = await upDislike(variable);
      if (upDislikeRes.success) {
        setDislikes((prev) => prev + 1);
        setDislikeAction("disliked");
        //If dislike count is already present
        if (LikeAction !== null) {
          setLikeAction(null);
          setLikes((prev) => prev - 1);
        }
      } else {
        console.error("Failed to increase dislike");
      }
    }
  };

  return (
    <>
      <div>
        <span>
          <Tooltip title="I like this">
            <IconButton onClick={onLike} sx={{ color: "white" }}>
              {LikeAction ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
            </IconButton>
          </Tooltip>
          <span>{Likes}</span>
        </span>
        &nbsp;&nbsp;
        <span>
          <Tooltip title="I dislike this">
            <IconButton onClick={onDislike} sx={{ color: "white" }}>
              {DislikeAction ? <ThumbDownIcon /> : <ThumbDownOffAltIcon />}
            </IconButton>
          </Tooltip>
          <span>{Dislikes}</span>
        </span>
      </div>
    </>
  );
}
