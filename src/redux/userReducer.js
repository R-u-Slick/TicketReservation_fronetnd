import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjNmMTdlNWMzY2IxNDVjMDQ1ZTk0ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzMDk1NTk0NCwiZXhwIjoxNjMxODM0MzQ0fQ.AXc0KhpkkR9d475zpfQVH1nXugZ1SJomyQ1uJBSerRw";

export const userFetch = createAsyncThunk(
  "user/fetch",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("http://localhost:3000/users/me", {
        headers: { Authorization: TOKEN },
      });
      const responseJSON = await response.json();
      if (!responseJSON.data) {
        throw new Error(responseJSON.err.message);
      }
      return responseJSON;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    status: "no data",
    data: null,
    error: null,
  },
  extraReducers: {
    [userFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload.data;
      state.error = null;
    },
    [userFetch.rejected]: (state, action) => {
      state.status = "error";
      state.data = null;
      state.error = action.payload.err;
    },
  },
});

export default currentUserSlice.reducer;
export const { userError, userLoaded } = currentUserSlice.actions;
