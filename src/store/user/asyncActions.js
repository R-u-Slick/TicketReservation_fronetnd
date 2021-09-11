import {
  setUserErrorAction,
  setUserAction,
  setUserStatusAction,
} from "./slice";
import formatRequest from "../../helpers/formatRequest";
import { STATUS_ERROR, STATUS_SUCCESS } from "../../constants/requests";

function userFetch() {
  return async function (dispatch) {
    const response = await formatRequest("/users/me");
    if (response.error) {
      dispatch(setUserStatusAction(STATUS_ERROR));
      return dispatch(setUserErrorAction(response.error));
    }
    dispatch(setUserStatusAction(STATUS_SUCCESS));
    return dispatch(setUserAction(response.response.data));
  };
}

export default userFetch;
