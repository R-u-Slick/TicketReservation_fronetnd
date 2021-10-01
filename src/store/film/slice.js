import { createSlice } from "@reduxjs/toolkit";

const filmSlice = createSlice({
  name: "film",
  initialState: {
    data: [],
    error: null,
  },
  reducers: {
    setFilm(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    setfilmError(state, action) {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export default filmSlice.reducer;
export const { setFilm: setFilmAction, setFilmError: setFilmErrorAction } =
  filmSlice.actions;
