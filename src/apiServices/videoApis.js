import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;
const { token } = JSON.parse(localStorage.getItem("userInfo"));
axios.defaults.headers.common.authorization = token;

export const getAllVideos = async () => {
  try {
    const res = await axios.get(`${baseUrl}/video/all`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};

export const getVideosByGenre = async (genre) => {
  try {
    const res = await axios.get(`${baseUrl}/video/${genre}`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};

export const addVideo = async (videoData) => {
  try {
    const res = await axios.post(`${baseUrl}/video/upload`, videoData);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};
