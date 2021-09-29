import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "city",
  initialState: {
    data: [],
    error: null,
  },
  reducers: {
    setCity(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    setCityError(state, action) {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export default citySlice.reducer;
export const { setCity: setCityAction, setCityError: setCityErrorAction } =
  citySlice.actions;
