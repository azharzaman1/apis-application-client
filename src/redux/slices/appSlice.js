import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    query: "",
  },
  reducers: {
    SET_QUERY: (state, action) => ({ ...state, query: action.payload }),
  },
});

export const { SET_QUERY } = appSlice.actions;
export default appSlice.reducer;
