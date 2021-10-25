import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./user/slice";
import cityReducer from "./city/slice";
import filmReducer from "./film/slice";
import cinemaReducer from "./cinema/slice";
import seatReducer from "./seat/slice";
import sessionReducer from "./session/slice";

const combinedReducer = combineReducers({
  user: userReducer,
  city: cityReducer,
  film: filmReducer,
  cinema: cinemaReducer,
  seat: seatReducer,
  session: sessionReducer,
});

export default combinedReducer;
