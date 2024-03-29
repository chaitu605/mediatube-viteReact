import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const getAllVideos = async () => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  axios.defaults.headers.common.authorization = token;
  try {
    const res = await axios.get(`${baseUrl}/video/all`);
    return res.data;
  } catch (error) {
    console.error("error", error.response);
    return error.response.data;
  }
};

export const getVideosByGenre = async (genre) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  axios.defaults.headers.common.authorization = token;
  try {
    const res = await axios.get(`${baseUrl}/video/${genre}`);
    return res.data;
  } catch (error) {
    console.error("error", error.response);
    return error.response.data;
  }
};

export const getVideosById = async (id) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  axios.defaults.headers.common.authorization = token;
  try {
    const res = await axios.get(`${baseUrl}/video/get/${id}`);
    return res.data;
  } catch (error) {
    console.error("error", error.response);
    return error.response.data;
  }
};

export const addVideo = async (videoData) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  axios.defaults.headers.common.authorization = token;
  try {
    const res = await axios.post(`${baseUrl}/video/upload`, videoData);
    return res.data;
  } catch (error) {
    console.error("error", error.response);
    return error.response.data;
  }
};

export const updateVideo = async (id, videoData) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  axios.defaults.headers.common.authorization = token;
  try {
    const res = await axios.put(`${baseUrl}/video/update/${id}`, videoData);
    return res.data;
  } catch (error) {
    console.error("error", error.response);
    return error.response.data;
  }
};

export const deleteVideo = async (videoData) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  axios.defaults.headers.common.authorization = token;
  try {
    const res = await axios.post(`${baseUrl}/video/delete`, videoData);
    return res.data;
  } catch (error) {
    console.error("error", error.response);
    return error.response.data;
  }
};
