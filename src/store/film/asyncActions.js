import { setFilmAction, setFilmErrorAction } from "./slice";
import formatRequest from "../../helpers/formatRequest";
import { useSelector } from "react-redux";
import { selectFilmData } from "./selectors";

// eslint-disable-next-line import/prefer-default-export
export function filmFetch(filmsArray) {
  if (filmsArray[0]) {
    return { type: null };
  }
  console.log(filmsArray);
  return async function (dispatch) {
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
