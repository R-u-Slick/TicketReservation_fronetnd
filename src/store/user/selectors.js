import { createSelector } from "@reduxjs/toolkit";

const selectUserSlice = (state) => state.user;

export const selectUserData = createSelector(
  selectUserSlice,
  (userSlice) => userSlice.data
);

export const selectUserError = createSelector(
  selectUserSlice,
  (userSlice) => userSlice.error
);

