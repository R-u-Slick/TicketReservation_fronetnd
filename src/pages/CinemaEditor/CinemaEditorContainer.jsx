import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header/HeaderContainer";
import CinemaEditor from "./CinemaEditor";
import { selectCinemaData } from "../../store/cinema/selectors";
import { selectCityData } from "../../store/city/selectors";
import { useEffect, useState } from "react";
import formatRequest from "../../helpers/formatRequest";
import { cinemaFetchUpdate } from "../../store/cinema/asyncActions";
import { Redirect } from "react-router";

const CinemaEditorContiner = ({ match }) => {
  const cinemasList = useSelector(selectCinemaData);
  const citiesList = useSelector(selectCityData);
  const [selectedCinema, setSelectedCinema] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentCinema = cinemasList.find(
      (cinema) => cinema._id === match.params.id
    );
    if (currentCinema) {
      setSelectedCinema(currentCinema);
    } else {
      const cinema = {
        halls: [],
        description: "",
        image: "",
        name: "",
      };
      setSelectedCinema(cinema);
    }
  }, [cinemasList]);

  const handleCinemaSave = async (editedCinema) => {
    try {
      if (editedCinema._id) {
        await formatRequest("/cinema", "PATCH", editedCinema);
      } else {
        await formatRequest("/cinema", "POST", editedCinema);
      }
      dispatch(cinemaFetchUpdate());
      alert("cinema saved");
      setIsSaved(true);
    } catch (err) {}
  };

  return (
    <>
      {isSaved && <Redirect to="/cinemas" />}
      <Header />
      {selectedCinema && (
        <CinemaEditor
          selectedCinema={selectedCinema}
          citiesList={citiesList}
          onCinemaSave={handleCinemaSave}
        />
      )}
    </>
  );
};

export default CinemaEditorContiner;
