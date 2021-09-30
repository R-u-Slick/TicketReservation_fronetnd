import { createSelector } from "@reduxjs/toolkit";

const selectCitySlice = (state) => state.city;

export const selectCityData = createSelector(
  selectCitySlice,
  (citySlice) => citySlice.data
);

export const selectCityError = createSelector(
  selectCitySlice,
  (citySlice) => citySlice.error
);
