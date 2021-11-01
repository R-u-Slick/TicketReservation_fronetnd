import { setOrderAction, setOrderErrorAction } from "./slice";
import formatRequest from "../../helpers/formatRequest";
import { selectOrderData } from "./selectors";

export function orderFetch() {
  return async function (dispatch) {
    try {
      const response = await formatRequest("/order", "GET");
      if (response.err) {
        return dispatch(setOrderErrorAction(response.err));
      }
      dispatch(setOrderAction(response.data));
      return response.data;
    } catch (err) {
      return dispatch(setOrderErrorAction(err.message));
    }
  };
}
