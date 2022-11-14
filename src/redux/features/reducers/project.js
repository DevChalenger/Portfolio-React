import { createSlice } from "@reduxjs/toolkit";
import { statusReducer } from "./status";

const initialState = {
  status: "void",
  data: [],
  error: null,
  loading: true,
};

const { actions, reducer } = createSlice({
  name: "project",
  initialState,
  reducers: {
    ...statusReducer,
  },
});

export const { pending, rejected, resolved } = actions;

export default reducer;
