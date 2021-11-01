import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    data: {},
    error: null,
  },
  reducers: {
    setOrder(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    setOrderError(state, action) {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export default orderSlice.reducer;
export const { setOrder: setOrderAction, setOrderError: setOrderErrorAction } =
  orderSlice.actions;
