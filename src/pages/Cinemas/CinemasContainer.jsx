import React from "react";
import Cinemas from "./Cinemas";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import { selectFilmData } from "../../store/film/selectors";
import { Grid, Typography } from "@material-ui/core";

const CinemasContainer = () => {
  const filmsArray = useSelector(selectFilmData);
  return (
    <>
      <Header />
      <Cinemas />
    </>
  );
};

export default CinemasContainer;
