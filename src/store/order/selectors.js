import { createSelector } from "@reduxjs/toolkit";

const selectOrderSlice = (state) => state.order;

export const selectOrderData = createSelector(
  selectOrderSlice,
  (orderSlice) => orderSlice.data
);

export const selectOrderError = createSelector(
  selectOrderSlice,
  (orderSlice) => orderSlice.error
);
