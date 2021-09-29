import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./user/slice";
import cityReducer from "./city/slice";

const combinedReducer = combineReducers({
  user: userReducer,
  city: cityReducer,
});

export default combinedReducer;
