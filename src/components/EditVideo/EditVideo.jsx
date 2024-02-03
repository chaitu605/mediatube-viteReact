import React from "react";
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
import UploadIcon from "@mui/icons-material/Upload";

export default function EditVideo() {
  const [loading, setLoading] = useState(false);
  const genres = [
    "Action",
    "Comedy",
    "Horror",
    "Romance",
    "Top-Rated",
    "Drama,Action",
  ];

  const handleInputChange = () => {};

  const handleSubmit = () => {};

  const submitData = () => {};

  return (
    <>
      <Grid
        container
        height="100%"
        justifyContent="center"
        alignItems="center"
        border="1px solid red"
      >
        <Paper elevation={20} sx={{ width: 500, padding: "20px 20px" }}>
          <Grid>
            <Box align="center">
              <Typography variant="h4" fontWeight="bold">
                Update Video
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
                    rows={2}
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl variant="outlined" fullWidth required>
                    <InputLabel id="demo-simple-select-outlined-label">
                      Select Genre
                    </InputLabel>
                    <Select
                      name="genre"
                      color="primary"
                      labelId="genretype"
                      id="genre"
                      label="Select Genre"
                      displayEmpty
                    >
                      {genres.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    fullWidth
                    startIcon={<UploadIcon />}
                  >
                    Upload
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
