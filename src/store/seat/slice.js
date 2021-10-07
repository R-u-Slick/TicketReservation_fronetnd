import { createSlice } from "@reduxjs/toolkit";

const seatSlice = createSlice({
  name: "seat",
  initialState: {
    data: [],
    error: null,
  },
  reducers: {
    setSeat(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    setSeatError(state, action) {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export default seatSlice.reducer;
export const { setSeat: setSeatAction, setSeatError: setSeatErrorAction } =
  seatSlice.actions;
