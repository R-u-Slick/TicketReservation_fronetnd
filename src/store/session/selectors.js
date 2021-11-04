import { createSelector } from "@reduxjs/toolkit";

const selectSessionSlice = (state) => state.session;

export const selectSessionData = createSelector(
  selectSessionSlice,
  (sessionSlice) => sessionSlice.data
);

export const selectSessionError = createSelector(
  selectSessionSlice,
  (cinemaSlice) => cinemaSlice.error
);
