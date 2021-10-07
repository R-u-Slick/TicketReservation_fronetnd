import { setFilmAction, setFilmErrorAction } from "./slice";
import formatRequest from "../../helpers/formatRequest";
import { selectFilmData } from "../../store/film/selectors";

export function filmFetch() {
  return async function (dispatch, getState) {
    const state = getState();
    const filmsList = selectFilmData(state);
    if (filmsList.length) {
      return { type: null };
    }

    try {
      const response = await formatRequest("/film", "GET");
      if (response.err) {
        return dispatch(setFilmErrorAction(response.err));
      }
      dispatch(setFilmAction(response.data));
    } catch (err) {
      setFilmErrorAction(err.message);
    }
  };
}
