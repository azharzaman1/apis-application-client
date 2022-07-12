import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../slices/appSlice";

const store = configureStore({
  reducer: {
    appStore: appReducer,
  },
});

export default store;
