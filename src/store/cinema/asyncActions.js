import { setCinemaAction, setCinemaErrorAction } from "./slice";
import formatRequest from "../../helpers/formatRequest";
import { selectCinemaData } from "./selectors";

export function cinemaFetch() {
  return async function (dispatch, getState) {
    const state = getState();
    const cinemasList = selectCinemaData(state);
    if (cinemasList.length) {
      return { type: null };
    }
    try {
      const response = await formatRequest("/cinema", "GET");
      if (response.err) {
        return dispatch(setCinemaErrorAction(response.err));
      }
      dispatch(setCinemaAction(response.data));
    } catch (err) {
      return dispatch(setCinemaErrorAction(err.message));
    }
  };
}

export function cinemaFetchUpdate() {
  return async function (dispatch) {
    try {
      const response = await formatRequest("/cinema", "GET");
      if (response.err) {
        return dispatch(setCinemaErrorAction(response.err));
      }
      dispatch(setCinemaAction(response.data));
    } catch (err) {
      return dispatch(setCinemaErrorAction(err.message));
    }
  };
}

export function cinemaPatch() {
  return async function (dispatch) {
    try {
      const response = await formatRequest("/cinema", "Patch");
      if (response.err) {
        return dispatch(setCinemaErrorAction(response.err));
      }
      dispatch(setCinemaAction(response.data));
    } catch (err) {
      return dispatch(setCinemaErrorAction(err.message));
    }
  };
}
