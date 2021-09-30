import React from "react";
import { PropTypes } from "prop-types";

const FilmInfo = ({ selectedFilm }) => {
  console.log(selectedFilm);

  return <div>{selectedFilm.name}</div>;
};

FilmInfo.defaultProps = {
  selectedFilm: {},
};

FilmInfo.propTypes = {
  selectedFilm: PropTypes.object,
};

export default FilmInfo;
