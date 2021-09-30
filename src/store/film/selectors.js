import { createSelector } from "@reduxjs/toolkit";

const selectFilmSlice = (state) => state.film;

export const selectFilmData = createSelector(
  selectFilmSlice,
  (filmSlice) => filmSlice.data
);

export const selectCityError = createSelector(
  selectFilmSlice,
  (filmSlice) => filmSlice.error
);
