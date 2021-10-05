import React, { useState } from "react";
import { PropTypes } from "prop-types";
import {
  Grid,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import "./Halls.scss";
import HallView from "../../components/HallView/HallView";

const Halls = ({ selectedCinema }) => {
  const [currentHallId, setCurrentHallId] = useState("");
  let currentHall = selectedCinema.halls.find(
    (hall) => hall._id === currentHallId
  );
  const handleHallChange = (event) => {
    setCurrentHallId(event.target.value);
  };
  return (
    <Container
      sx={{
        mt: "2rem",
      }}
      className="halls"
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">
            {selectedCinema.name} - hall view
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="selectHallLabel">Hall</InputLabel>
            <Select
              labelId="selectHallLabel"
              id="selectHall"
              value={currentHallId}
              label="Hall"
              onChange={handleHallChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {selectedCinema.halls.map((hall) => {
                return (
                  <MenuItem key={hall._id} value={hall._id}>
                    {hall.name}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText>Please, choose a hall</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={10}>
          {currentHall && <HallView hall={currentHall} />}
        </Grid>
      </Grid>
    </Container>
  );
};

Halls.defaultProps = {
  selectedCinema: {},
};

Halls.propTypes = {
  selectedCinema: PropTypes.object,
};

export default Halls;
