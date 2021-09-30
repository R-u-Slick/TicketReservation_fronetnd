import { setUserErrorAction, setUserAction } from "./slice";
import formatRequest from "../../helpers/formatRequest";

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
