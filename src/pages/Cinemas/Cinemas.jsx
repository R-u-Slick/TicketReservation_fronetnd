import React from "react";
import { PropTypes } from "prop-types";
import { Grid, Typography, Container } from "@material-ui/core";

const Cinemas = () => {
  return (
    <Container
      sx={{
        mt: "2rem",
      }}
    >
      <Grid container spacing={2} mt="3rem">
        <Grid item xs={4}>
          <img src="" />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h2">Cinema name</Typography>
          <Typography variant="h5" mt="1rem">
            Cinema name
          </Typography>
          <Typography variant="h5">minutes</Typography>
          <Typography variant="h5">Starring:</Typography>
          <Typography variant="body1" mt="2rem">
            description
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

Cinemas.defaultProps = {};

Cinemas.propTypes = {};

export default Cinemas;
