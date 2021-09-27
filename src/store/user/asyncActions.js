import { setUserErrorAction, setUserAction } from "./slice";
import formatRequest from "../../helpers/formatRequest";
import { STATUS_ERROR, STATUS_SUCCESS } from "../../constants/requests";

const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjNmMTdlNWMzY2IxNDVjMDQ1ZTk0ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzMTM2NzgzOSwiZXhwIjoxNjMyMjQ2MjM5fQ.Tyh_YBuE_crdvrdzQVT8HG9mcBH7VcGXHiAGc8Lx_20";

export function userFetch() {
  return async function (dispatch) {
    const response = await formatRequest("/users/me", "GET", TOKEN);
    if (response.error) {
      return dispatch(setUserErrorAction(response.error));
    }
    return dispatch(setUserAction(response.response.data));
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
