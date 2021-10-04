import { createSlice } from "@reduxjs/toolkit";

const cinemaSlice = createSlice({
  name: "cinema",
  initialState: {
    data: [],
    error: null,
  },
  reducers: {
    setCinema(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    setCinemaError(state, action) {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export default cinemaSlice.reducer;
export const {
  setCinema: setCinemaAction,
  setCinemaError: setCinemaErrorAction,
} = cinemaSlice.actions;
