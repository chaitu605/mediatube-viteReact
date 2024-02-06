import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./slices/userAuthSlice";

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
  },
  devTools: false,
});

export default store;
