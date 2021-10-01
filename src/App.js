import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PagesRouter from "./router/PagesRouter";
import { selectUserData } from "./store/user/selectors";
import { userFetch } from "./store/user/asyncActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userFetch());
  }, []);

  return (
    <BrowserRouter>
      <PagesRouter />
    </BrowserRouter>
  );
};

export default App;
