import React from "react";
import { PropTypes } from "prop-types";
import { Grid, Typography, Button, Stack } from "@material-ui/core";
import "./Cinemas.scss";
import { CLIENT, ADMIN } from "../../constants/roles";
import { Link } from "react-router-dom";

const Cinemas = ({ cinema, role, onDeleteCinema }) => {
  const handleDeleteCinema = () => {
    onDeleteCinema(cinema);
  };

  return (
    <>
      <Grid item xs={4}>
        <img src={cinema.image} className="cinemas__image" />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h3">{cinema.name}</Typography>
        <Typography variant="h5">City: {cinema.city.name}</Typography>
        <Typography variant="body1">
          Description: {cinema.description}
        </Typography>
        <Stack mt="1rem" spacing={2} direction="row">
          <Link to={`/schedule/${cinema._id}`} className="cinemas__button">
            <Button variant="outlined">
              {role === ADMIN ? "Edit schedule" : "View schedule"}
            </Button>
          </Link>
          <Link to={`/halls/${cinema._id}`} className="cinemas__button">
            <Button variant="outlined">
              {role === ADMIN ? "Edit halls" : "View halls"}
            </Button>
          </Link>
          {role === ADMIN && (
            <Link
              to={`/cinemas/editor/${cinema._id}`}
              className="cinemas__button"
            >
              <Button variant="outlined">Edit cinema</Button>
            </Link>
          )}
          {role === ADMIN && (
            <Button
              variant="outlined"
              color="error"
              onClick={handleDeleteCinema}
            >
              Delete cinema
            </Button>
          )}
        </Stack>
      </Grid>
    </>
  );
};

Cinemas.defaultProps = {
  role: "",
  onDeleteCinema: () => {},
};

Cinemas.propTypes = {
  cinema: PropTypes.object.isRequired,
  role: PropTypes.string,
  onDeleteCinema: PropTypes.func,
};

export default Cinemas;
