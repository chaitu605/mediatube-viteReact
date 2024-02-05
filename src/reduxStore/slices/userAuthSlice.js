import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  adminFeatures: localStorage.getItem("adminFeatures")
    ? JSON.parse(localStorage.getItem("adminFeatures"))
    : false,
};

const userAuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    adminFeaturesReducer: (state, action) => {
      state.adminFeatures = action.payload;
      localStorage.setItem("adminFeatures", JSON.stringify(action.payload));
    },
    logoutReducer: (state, action) => {
      state.userInfo = null;
      localStorage.clear();
    },
  },
});

export const { loginReducer, logoutReducer, adminFeaturesReducer } =
  userAuthSlice.actions;
export default userAuthSlice.reducer;
