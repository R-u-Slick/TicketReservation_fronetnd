import { Route } from "react-router-dom";

import Main from "../pages/Main/MainContainer";
import LoginPage from "../pages/Login/LoginContainer";
import RegistrationPage from "../pages/Registration/RegistrationContainer";
import Schedule from "../pages/Schedule";
import Movies from "../pages/Movies";
import Cinemas from "../pages/Cinemas";
import FilmInfoContainer from "../pages/FilmInfo/FilmInfoContainer";
import React from "react";
import { Switch, Redirect } from "react-router-dom";

const PagesRouter = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/schedule" component={Schedule} />
      <Route path="/films/:id" component={FilmInfoContainer} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/cinemas" component={Cinemas} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/registration" component={RegistrationPage} />
    </Switch>
  </React.Fragment>
);

export default PagesRouter;
