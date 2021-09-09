import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "no data",
    data: null,
    error: null,
  },
  reducers: {
    setUserError(state, action) {
      state.status = "error";
      state.data = null;
      console.log(action);
    },
    setUserLoaded(state, action) {
      state.status = "success";
      state.data = action.payload;
    },
  },
});

export default userSlice.reducer;
export const {
  setUserLoaded: setUserLoadedAction,
  setUserError: setUserErrorAction,
} = userSlice.actions;
