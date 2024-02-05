import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const getComments = async (videoId) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  axios.defaults.headers.common.authorization = token;
  try {
    const res = await axios.post(`${baseUrl}/comment/getcomment`, videoId);
    return res.data;
  } catch (error) {
    console.error("error", error.response);
    return error.response.data;
  }
};

export const saveComments = async (videoId) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  axios.defaults.headers.common.authorization = token;
  try {
    const res = await axios.post(`${baseUrl}/comment/savecomment`, videoId);
    return res.data;
  } catch (error) {
    console.error("error", error.response);
    return error.response.data;
  }
};
