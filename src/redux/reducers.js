import { combineReducers } from "redux";

import userReducer from "./userReducer";

let combinedReducer = combineReducers({
  user: userReducer,
});

export default combinedReducer;
