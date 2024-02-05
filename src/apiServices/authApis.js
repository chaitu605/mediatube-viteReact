import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const signUp = async (userData) => {
  try {
    const res = await axios.post(`${baseUrl}/auth/signup`, userData);

    return res.data;
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};

export const signIn = async (userData) => {
  try {
    const res = await axios.post(`${baseUrl}/auth/signin`, userData);

    return res.data;
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};
