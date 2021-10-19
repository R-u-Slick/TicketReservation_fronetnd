import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Main from "../pages/Main/MainContainer";
import LoginPage from "../pages/Login/LoginContainer";
import RegistrationPage from "../pages/Registration/RegistrationContainer";
import Schedule from "../pages/Schedule";
import Movies from "../pages/Movies";
import Cinemas from "../pages/Cinemas/CinemasContainer";
import FilmInfoContainer from "../pages/FilmInfo/FilmInfoContainer";
import React, { useEffect, useState } from "react";
import { Switch, Redirect } from "react-router-dom";
import HallsContainer from "../pages/Halls/HallsContainer";
import CinemaEditor from "../pages/CinemaEditor/CinemaEditorContainer";
import { selectUserData } from "../store/user/selectors";
import { ADMIN, CLIENT } from "../constants/roles";

const PagesRouter = () => {
  const userData = useSelector(selectUserData);
  const [role, setRole] = useState(null);
  useEffect(() => {
    if (userData) {
      setRole(userData.role);
    } else {
      setRole(null);
    }
  }, [userData]);
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/schedule" component={Schedule} />
      <Route path="/films/:id" component={FilmInfoContainer} />
      <Route path="/halls/:id" component={HallsContainer} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/cinemas" component={Cinemas} />
      <Route exact path="/cinemas/editor/:id" component={CinemaEditor}>
        {role !== ADMIN && <Redirect to="/login" />}
      </Route>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/registration" component={RegistrationPage} />
    </Switch>
  );
};

export default PagesRouter;
