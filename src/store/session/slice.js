import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    data: [],
    error: null,
  },
  reducers: {
    setSession(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    setSessionError(state, action) {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export default sessionSlice.reducer;
export const {
  setSession: setSessionAction,
  setSessionError: setSessionErrorAction,
} = sessionSlice.actions;
