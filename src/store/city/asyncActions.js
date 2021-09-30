import { setCityAction, setCityErrorAction } from "./slice";
import formatRequest from "../../helpers/formatRequest";
import { useSelector } from "react-redux";
import { selectCityData } from "./selectors";

// eslint-disable-next-line import/prefer-default-export
export function cityFetch(citiesArray) {
  if (citiesArray[0]) {
    return { type: null };
  }
  return async function (dispatch) {
    try {
      const response = await formatRequest("/city", "GET");
      if (response.err) {
        return dispatch(setCityErrorAction(response.err));
      }
      dispatch(setCityAction(response.data));
    } catch (err) {
      setCityErrorAction(err.message);
    }
  };
}
