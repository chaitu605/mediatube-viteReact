import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Button,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import UploadIcon from "@mui/icons-material/Upload";
import { toast } from "react-toastify";
import { addVideo } from "../../apiServices/videoApis";
import ButtonLoader from "../Loader/ButtonLoader";

export default function AddVideo() {
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState({
    title: "",
    description: "",
    genre: "",
    thumbnail: "",
    videoId: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const genres = [
    "Action",
    "Comedy",
    "Horror",
    "Romance",
    "Top-Rated",
    "Drama,Action",
  ];

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleInputChange = async (e) => {
    const { name, value, files } = e.target;
    if (files && files[0].size > 5000000) {
      toast.warning(`File size should be less than 5MB`);
      e.target.value = "";
      return;
    }
    const newValue = files ? await convertToBase64(files[0]) : value;
    setVideoData((prevValues) => ({ ...prevValues, [name]: newValue }));
  };

  const submitData = async () => {
    setLoading(true);
    const result = await addVideo(videoData);
    console.log(result);

    if (result.success) {
      toast.success(`${result.message}`);
    } else {
      toast.error(`${result.message}`);
    }
    setLoading(false);
  };

  return (
    <>
      <Grid container height="100%" justifyContent="center" alignItems="center">
        <Paper elevation={20} sx={{ width: 500, padding: "20px 20px" }}>
          <Grid>
            <Box align="center">
              <Typography variant="h4" fontWeight="bold">
                Upload Video
              </Typography>
            </Box>
            <form onSubmit={handleSubmit(submitData)}>
              <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                  <TextField
                    color="primary"
                    name="title"
                    // value={title}
                    id="outlined-basic"
                    label="Title"
                    placeholder="Enter Title"
                    variant="outlined"
                    required
                    fullWidth
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    color="primary"
                    name="description"
                    // value={description}
                    id="outlined-multiline-static"
                    label="Description"
                    placeholder="Enter description"
                    multiline
                    rows={3}
                    variant="outlined"
                    required
                    fullWidth
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-select-currency"
                    select
                    name="genre"
                    label="Select Genre"
                    // defaultValue="Select"
                    value={videoData.genre}
                    onChange={handleInputChange}
                  >
                    {genres.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    color="primary"
                    name="thumbnail"
                    id="outlined-basic"
                    label="Thumbnail"
                    type="file"
                    placeholder="Placeholder"
                    variant="outlined"
                    required
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    color="primary"
                    name="videoId"
                    id="outlined-basic"
                    label="VideoId"
                    placeholder="Enter VideoId"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    fullWidth
                    // startIcon={<UploadIcon />}
                    disabled={loading}
                  >
                    {loading ? <ButtonLoader /> : "Upload"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
