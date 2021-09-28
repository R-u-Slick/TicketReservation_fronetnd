import { setUserErrorAction, setUserAction } from "./slice";
import formatRequest from "../../helpers/formatRequest";
import { STATUS_ERROR, STATUS_SUCCESS } from "../../constants/requests";

export function userFetch() {
  const token = localStorage.getItem("token");
  return async function (dispatch) {
    const response = await formatRequest("/users/me", "GET", token);
    if (response.err) {
      return dispatch(setUserErrorAction(response.err));
    }
    return dispatch(setUserAction(response.data));
  };
}

export function userRegistration(data) {
  return async function (dispatch) {
    const response = await formatRequest("/user", "POST", null, data);
    if (response.error) {
      return dispatch(setUserErrorAction(response.error));
    }
  };
}
