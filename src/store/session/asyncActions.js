import { setSessionAction, setSessionErrorAction } from "./slice";
import formatRequest from "../../helpers/formatRequest";
import { selectSessionData } from "./selectors";

export function sessionFetch() {
  return async function (dispatch, getState) {
    const state = getState();
    const sessionsList = selectSessionData(state);
    if (sessionsList.length) {
      return { type: null };
    }
    try {
      const response = await formatRequest("/session", "GET");
      if (response.err) {
        return dispatch(setSessionErrorAction(response.err));
      }
      dispatch(setSessionAction(response.data));
    } catch (err) {
      return dispatch(setSessionErrorAction(err.message));
    }
  };
}

export function sessionFetchUpdate() {
  return async function (dispatch) {
    try {
      const response = await formatRequest("/session", "GET");
      if (response.err) {
        return dispatch(setSessionErrorAction(response.err));
      }
      dispatch(setSessionAction(response.data));
    } catch (err) {
      return dispatch(setSessionErrorAction(err.message));
    }
  };
}
