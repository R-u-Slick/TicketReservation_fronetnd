import { setCinemaAction, setCinemaErrorAction } from "./slice";
import formatRequest from "../../helpers/formatRequest";

// eslint-disable-next-line import/prefer-default-export
export function cinemaFetch(cinemasArray) {
  if (cinemasArray[0]) {
    return { type: null };
  }
  return async function (dispatch) {
    try {
      const response = await formatRequest("/cinema", "GET");
      if (response.err) {
        return dispatch(setCinemaErrorAction(response.err));
      }
      dispatch(setCinemaAction(response.data));
    } catch (err) {
      setCinemaErrorAction(err.message);
    }
  };
}
