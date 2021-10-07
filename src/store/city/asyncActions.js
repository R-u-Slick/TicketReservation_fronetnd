import { setCityAction, setCityErrorAction } from "./slice";
import formatRequest from "../../helpers/formatRequest";
import { selectCityData } from "../../store/city/selectors";

export function cityFetch() {
  return async function (dispatch, getState) {
    const state = getState();
    const citiesList = selectCityData(state);
    if (citiesList.length) {
      return { type: null };
    }
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
