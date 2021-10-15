import React, { useEffect } from "react";
import Halls from "./Halls";
import Header from "../../components/Header/HeaderContainer";
import { useSelector, useDispatch } from "react-redux";
import { selectCinemaData } from "../../store/cinema/selectors";
import { selectUserData } from "../../store/user/selectors";
import { selectSeatData } from "../../store/seat/selectors";
import seatFetch from "../../store/seat/asyncActions";
import { ContactSupportOutlined } from "@material-ui/icons";

const HallsContainer = ({ match }) => {
  const userData = useSelector(selectUserData);
  const cinemasList = useSelector(selectCinemaData);
  const seatsList = useSelector(selectSeatData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(seatFetch());
  });

  const selectedCinema = cinemasList.find(
    (cinema) => cinema._id === match.params.id
  );
  console.log(selectedCinema.halls);
  return (
    <>
      <Header />
      <Halls
        selectedCinema={selectedCinema}
        role={userData ? userData.role : null}
        seats={seatsList}
      />
    </>
  );
};

export default HallsContainer;
