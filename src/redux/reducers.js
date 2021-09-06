import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./userReducer";

let combinedReducer = combineReducers({
  user: userReducer,
});

export default combinedReducer;
