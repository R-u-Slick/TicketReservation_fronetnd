import { setCinemaAction, setCinemaErrorAction } from "./slice";
import formatRequest from "../../helpers/formatRequest";
import { selectCinemaData } from "../../store/cinema/selectors";

function cinemaFetch() {
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
      setCinemaErrorAction(err.message);
    }
  };
}

export default cinemaFetch;
