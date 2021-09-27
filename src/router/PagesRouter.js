import { Route } from "react-router-dom";

import Main from "../pages/Main";
import LoginPage from "../pages/Login/LoginContainer";
import RegistrationPage from "../pages/Registration/RegistrationContainer";
import Schedule from "../pages/Schedule";
import Movies from "../pages/Movies";
import Cinemas from "../pages/Cinemas";
import React from "react";

const PagesRouter = () => (
  <React.Fragment>
    <Route exact path="/" component={Main} />
    <Route exact path="/schedule" component={Schedule} />
    <Route exact path="/movies" component={Movies} />
    <Route exact path="/cinemas" component={Cinemas} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/registration" component={RegistrationPage} />
  </React.Fragment>
);

export default PagesRouter;
