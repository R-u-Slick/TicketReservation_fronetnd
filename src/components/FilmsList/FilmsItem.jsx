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
import { useHistory } from "react-router";

const FilmsItem = ({ film }) => {
  const history = useHistory();
  return (
    <Grid item xs={3} md={4}>
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
          <Button
            variant="contained"
            onClick={() => {
              history.push(`/films/${film._id}`);
            }}
          >
            More info
          </Button>
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
