import React from "react";
import Halls from "./Halls";
import Header from "../../components/Header/HeaderContainer";
import { useSelector } from "react-redux";
import { selectCinemaData } from "../../store/cinema/selectors";

const HallsContainer = ({ match }) => {
  const cinemasArray = useSelector(selectCinemaData);
  const selectedCinema = cinemasArray.find(
    (cinema) => cinema._id === match.params.id
  );
  return (
    <>
      <Header />
      <Halls selectedCinema={selectedCinema} />
    </>
  );
};

export default HallsContainer;