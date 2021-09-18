import { Route } from "react-router-dom";

import Main from "../pages/Main";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Schedule from "../pages/Schedule";
import Movies from "../pages/Movies";
import Cinemas from "../pages/Cinemas";

const PagesRouter = () => (
  <div>
    <Route exact path="/" component={Main} />
    <Route exact path="/schedule" component={Schedule} />
    <Route exact path="/movies" component={Movies} />
    <Route exact path="/Cinemas" component={Cinemas} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/registration" component={Registration} />
  </div>
);

export default PagesRouter;
