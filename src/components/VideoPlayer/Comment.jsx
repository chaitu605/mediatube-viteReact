import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Moment from "react-moment";

import {
  Avatar,
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { saveComments } from "../../apiServices/commentApis";

export default function Comment(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user = useSelector((state) => state.userAuth);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setComment(value);
  };

  const onSubmit = async (e) => {
    setLoading(true);
    const variables = {
      comment: comment,
      writer: user.userInfo.userId,
      postId: props.postId,
    };

    const postComment = await saveComments(variables);

    if (postComment.success) {
      props.refreshFunction(postComment.data);
    }
    setLoading(false);
    setComment("");
  };

  return (
    <>
      <div>
        <div style={{ marginBottom: "1rem" }}>
          <Typography variant="h5" fontWeight="bold">
            {props.commentLists.length} Comments
          </Typography>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: "2rem" }}>
            <TextField
              sx={{ input: { color: "white" } }}
              InputProps={{
                startAdornment: (
                  <Avatar
                    sx={{ marginRight: "1rem", marginBottom: "0.3rem" }}
                  />
                ),
                endAdornment: (
                  <Button disabled={loading} type="submit">
                    <Typography>Post</Typography>
                  </Button>
                ),
              }}
              onChange={handleChange}
              id="standard-basic"
              name="comment"
              placeholder=" Add a comment"
              value={comment}
              fullWidth
              variant="outlined"
              //   {...register("comment", { required: "Please add a comment" })}
              //   error={Boolean(errors.comment)}
              //   helperText={errors.comment?.message}
            />
          </div>
        </form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "1rem",
          }}
        >
          {props.commentLists &&
            props.commentLists.map((comment, index) => (
              <Box
                key={index}
                elevation={0}
                sx={{
                  display: "flex",
                  columnGap: "1rem",
                  alignItems: "center",
                }}
              >
                <Avatar />

                <div>
                  <div
                    style={{
                      display: "flex",
                      columnGap: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    <Typography>{comment.writer.username}</Typography>
                    <Typography sx={{ color: "grey", fontSize: "0.7rem" }}>
                      (<Moment fromNow>{comment.createdAt}</Moment>)
                    </Typography>
                  </div>

                  <Typography>{comment.comment}</Typography>
                </div>
              </Box>
            ))}
        </div>
      </div>
    </>
  );
}
