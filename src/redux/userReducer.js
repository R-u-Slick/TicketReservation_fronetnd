import { USER_ERROR, USER_LOADED } from "./userAC";

const initState = {
  status: "no data",
  data: null,
};

function userReducer(state = initState, action) {
  switch (action.type) {
    case USER_ERROR: {
      let newState = {
        status: action.status,
        data: null,
      };
      return newState;
    }

    case USER_LOADED: {
      let newState = {
        status: "Success",
        data: action.data,
      };
      return newState;
    }

    default:
      return state;
  }
}

export default userReducer;
