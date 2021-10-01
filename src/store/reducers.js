import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./user/slice";
import cityReducer from "./city/slice";
import filmReducer from "./film/slice";

const combinedReducer = combineReducers({
  user: userReducer,
  city: cityReducer,
  film: filmReducer,
});

export default combinedReducer;
