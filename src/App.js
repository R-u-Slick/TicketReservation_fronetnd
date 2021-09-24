import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import {userFetch} from "./store/user/asyncActions";
import { selectUserData } from "./store/user/selectors";
import PagesRouter from "./router/PagesRouter";

const App = () => {
  return (
    <BrowserRouter>
      <PagesRouter />
    </BrowserRouter>
  );
};

export default App;
