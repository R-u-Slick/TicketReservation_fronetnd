import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import userFetch from "./store/user/asyncActions";
import { selectUserStatus, selectUserData } from "./store/user/selectors";
import PagesRouter from "./router/PagesRouter";

const App = () => {
  const currentStatus = useSelector(selectUserStatus);
  const currentUserData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const sendUserRequest = () => {
    dispatch(userFetch());
  };

  return (
    <BrowserRouter>
      <PagesRouter />
    </BrowserRouter>
  );
};

export default App;
