import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const getLikes = async (videoId) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  axios.defaults.headers.common.authorization = token;
  try {
    const res = await axios.post(`${baseUrl}/like/getlikes`, videoId);
    return res.data;
  } catch (error) {
    console.error("error", error.response);
    return error.response.data;
  }
};

export const getDislikes = async (videoId) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  axios.defaults.headers.common.authorization = token;
  try {
    const res = await axios.post(`${baseUrl}/like/getdislikes`, videoId);
    return res.data;
  } catch (error) {
    console.error("error", error.response);
    return error.response.data;
  }
};

export const upLike = async (videoId) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  axios.defaults.headers.common.authorization = token;
  try {
    const res = await axios.post(`${baseUrl}/like/uplike`, videoId);
    return res.data;
  } catch (error) {
    console.error("error", error.response);
    return error.response.data;
  }
};

export const unLike = async (videoId) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  axios.defaults.headers.common.authorization = token;
  try {
    const res = await axios.post(`${baseUrl}/like/unlike`, videoId);

    return res.data;
  } catch (error) {
    console.error("error", error.response);
    return error.response.data;
  }
};

export const upDislike = async (videoId) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  axios.defaults.headers.common.authorization = token;
  try {
    const res = await axios.post(`${baseUrl}/like/updislike`, videoId);

    return res.data;
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};

export const unDislike = async (videoId) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  axios.defaults.headers.common.authorization = token;
  try {
    const res = await axios.post(`${baseUrl}/like/undislike`, videoId);

    return res.data;
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};
