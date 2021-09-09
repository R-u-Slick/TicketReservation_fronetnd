import { setUserErrorAction, setUserLoadedAction } from "./slice";
import formatRequest from "../../helpers/formatRequest";

function userFetch() {
  return async function (dispatch) {
    const response = await formatRequest("/users/me");
    if (response.error) {
      return dispatch(setUserErrorAction(response.error));
    }
    return dispatch(setUserLoadedAction(response.response.data));
  };
}

export default userFetch;
