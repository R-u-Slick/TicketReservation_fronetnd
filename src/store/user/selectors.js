import { createSelector } from "@reduxjs/toolkit";

const selectUserSlice = (state) => state.user;

export const selectUserStatus = createSelector(
  selectUserSlice,
  (userSlice) => userSlice.status
);

export const selectUserData = createSelector(
  selectUserSlice,
  (userSlice) => userSlice.data
);
