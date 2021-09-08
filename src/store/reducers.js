import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";

let combinedReducer = combineReducers({
  user: userReducer,
});

export default combinedReducer;
