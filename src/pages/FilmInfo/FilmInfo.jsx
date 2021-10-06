import React from "react";
import { PropTypes } from "prop-types";
import { Grid, Typography, Container } from "@material-ui/core";
import "./FilmInfo.scss";

const FilmInfo = ({ selectedFilm }) => {
  return (
    <Container
      sx={{
        mt: "2rem",
      }}
      className="film-info"
    >
      <Grid container spacing={2} mt="3rem">
        <Grid item xs={4}>
          <img src={selectedFilm.image} className="image" />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h2">{selectedFilm.name}</Typography>
          <Typography variant="h5" mt="1rem">
            {selectedFilm.genre.name}
          </Typography>
          <Typography variant="h5">{selectedFilm.duration} minutes</Typography>
          <Typography variant="h5">
            Starring:
            {selectedFilm.actors.map((actor, index, actors) => {
              if (index === actors.length - 1) {
                return ` ${actor.firstName} ${actor.lastName}`;
              }
              return ` ${actor.firstName} ${actor.lastName}, `;
            })}
          </Typography>
          <Typography variant="body1" mt="2rem">
            {selectedFilm.description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

FilmInfo.defaultProps = {
  selectedFilm: {},
};

FilmInfo.propTypes = {
  selectedFilm: PropTypes.object,
};

export default FilmInfo;
