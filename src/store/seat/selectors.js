import { createSelector } from "@reduxjs/toolkit";

const selectSeatSlice = (state) => state.seat;

export const selectSeatData = createSelector(
  selectSeatSlice,
  (seatSlice) => seatSlice.data
);

export const selectSeatError = createSelector(
  selectSeatSlice,
  (seatSlice) => seatSlice.error
);
