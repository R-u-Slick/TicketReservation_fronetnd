import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./user/slice";

const combinedReducer = combineReducers({
  user: userReducer,
});

export default combinedReducer;
