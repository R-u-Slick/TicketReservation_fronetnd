import React from "react";
import FilmInfo from "./FilmInfo";
import Header from "../../components/Header/HeaderContainer";
import { useSelector } from "react-redux";
import { selectFilmData } from "../../store/film/selectors";

const FilmInfoContainer = ({ match }) => {
  const filmsArray = useSelector(selectFilmData);
  const selectedFilm = filmsArray.find((film) => film._id === match.params.id);
  return (
    <>
      <Header />
      <FilmInfo selectedFilm={selectedFilm} />
    </>
  );
};

export default FilmInfoContainer;
