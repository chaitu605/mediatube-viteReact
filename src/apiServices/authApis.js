import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const googleUrl = import.meta.env.VITE_GOOGLE_URL;

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

export const googleSignIn = async (accessToken) => {
  try {
    const res = await axios.get(`${googleUrl}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    console.log("res", res);
    if (res.status === 200) {
      const serverRes = await axios.post(`${baseUrl}/auth/google`, res.data);
      return serverRes.data;
    }
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};
