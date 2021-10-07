import React from "react";
import "./FilmsList.scss";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const FilmsItem = ({ film }) => {
  return (
    <Grid item xs={3} md={4} className="films-item">
      <Card>
        <CardMedia
          image={film.image}
          component="img"
          alt={film.name}
          title={film.name}
          sx={{ maxHeight: 542 }}
        />
        <CardContent>
          <Typography variant="h6" component="h3">
            {film.name}
          </Typography>
          <Typography variant="body1">Genre: {film.genre.name}</Typography>
          <Typography variant="body1">
            Duration: {film.duration} minutes
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/films/${film._id}`} className="button">
            <Button variant="contained">More info</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

FilmsItem.defaultProps = {
  film: "",
};

FilmsItem.propTypes = {
  film: PropTypes.object,
};

export default FilmsItem;
