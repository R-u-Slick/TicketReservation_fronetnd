import { createSelector } from "@reduxjs/toolkit";

const selectCinemaSlice = (state) => state.cinema;

export const selectCinemaData = createSelector(
  selectCinemaSlice,
  (cinemaSlice) => cinemaSlice.data
);

export const selectCinemaError = createSelector(
  selectCinemaSlice,
  (cinemaSlice) => cinemaSlice.error
);
