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
import HallEdit from "../../components/HallEdit/HallEdit";
import { ADMIN, CLIENT } from "../../constants/roles";

const Halls = ({ selectedCinema, role, seats }) => {
  const [currentHallId, setCurrentHallId] = useState("");
  let currentHall = selectedCinema.halls.find(
    (hall) => hall._id === currentHallId
  );
  const handleHallChange = (event) => {
    setCurrentHallId(event.target.value);
  };
  console.log(seats);
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
            {selectedCinema.name} - {role === ADMIN ? "hall edit" : "hall view"}
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
          <Typography variant="h4">
            {currentHall ? currentHall.name : ""}
          </Typography>
          {currentHall && <HallView hall={currentHall} role={role} />}
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={10}>
          {currentHallId && <HallEdit seats={seats} />}
        </Grid>
      </Grid>
    </Container>
  );
};

Halls.defaultProps = {
  selectedCinema: {},
  role: "",
  seats: [],
};

Halls.propTypes = {
  selectedCinema: PropTypes.object,
  role: PropTypes.string,
  seats: PropTypes.array,
};

export default Halls;
