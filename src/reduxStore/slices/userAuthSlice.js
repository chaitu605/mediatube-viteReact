import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const userAuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logoutReducer: (state, action) => {
      state.userInfo = null;
      localStorage.clear();
    },
  },
});

export const { loginReducer, logoutReducer } = userAuthSlice.actions;
export default userAuthSlice.reducer;
