import { setSeatAction, setSeatErrorAction } from "./slice";
import formatRequest from "../../helpers/formatRequest";
import { selectSeatData } from "./selectors";

function seatFetch() {
  return async function (dispatch, getState) {
    const state = getState();
    const seatsList = selectSeatData(state);
    if (seatsList.length) {
      return { type: null };
    }
    try {
      const response = await formatRequest("/seat", "GET");
      if (response.err) {
        return dispatch(setSeatErrorAction(response.err));
      }
      dispatch(setSeatAction(response.data));
    } catch (err) {
      setSeatErrorAction(err.message);
    }
  };
}

export default seatFetch;
