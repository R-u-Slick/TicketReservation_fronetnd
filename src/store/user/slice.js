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
      alert(action);
    },
    setUser(state, action) {
      state.data = action.payload;
    },
    setUserStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export default userSlice.reducer;
export const {
  setUser: setUserAction,
  setUserError: setUserErrorAction,
  setUserStatus: setUserStatusAction,
} = userSlice.actions;
