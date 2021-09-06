import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjNmMTdlNWMzY2IxNDVjMDQ1ZTk0ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzMDk1NTk0NCwiZXhwIjoxNjMxODM0MzQ0fQ.AXc0KhpkkR9d475zpfQVH1nXugZ1SJomyQ1uJBSerRw";

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
