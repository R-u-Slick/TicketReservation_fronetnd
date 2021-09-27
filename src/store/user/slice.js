import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    status: null,
    data: null,
    error: null,
  },
  reducers: {
    setUserError(state, action) {
      state.data = null;
      state.error = action.payload;
    },
    setUser(state, action) {
      state.data = action.payload;
      state.error = null;
    },
  },
});

export default userSlice.reducer;
export const { setUser: setUserAction, setUserError: setUserErrorAction } =
  userSlice.actions;
