import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import FilmsItem from "./FilmsItem";
import { selectFilmData } from "../../store/film/selectors";
import { filmFetch } from "../../store/film/asyncActions";
import "./FilmsList.scss";

const FilmsList = () => {
  const filmsArray = useSelector(selectFilmData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filmFetch(filmsArray));
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Now in theatres</Typography>
      </Grid>
      {filmsArray.map((film) => (
        <FilmsItem key={film._id} film={film} />
      ))}
    </Grid>
  );
};

export default FilmsList;
