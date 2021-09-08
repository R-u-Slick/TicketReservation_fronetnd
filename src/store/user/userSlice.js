import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    status: "no data",
    data: null,
    error: null,
  },
  reducers: {
    userError(state, action) {
      state.status = "error";
      state.data = null;
      console.log(action);
    },
    userLoaded(state, action) {
      state.status = "success";
      state.data = action.payload;
    },
  },
});

export default currentUserSlice.reducer;
export const { userError, userLoaded } = currentUserSlice.actions;
