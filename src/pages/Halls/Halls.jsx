import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
  Button,
  Box,
} from "@material-ui/core";
import "./Halls.scss";
import HallView from "../../components/HallView/HallView";
import HallEdit from "../../components/HallEdit/HallEdit";
import { ADMIN, CLIENT } from "../../constants/roles";
import formatRequest from "../../helpers/formatRequest";
import { cinemaFetchUpdate } from "../../store/cinema/asyncActions";

const Halls = ({ selectedCinema, role, seats }) => {
  const [currentHallId, setCurrentHallId] = useState("");
  const [currentHall, setCurrentHall] = useState("");
  const dispatch = useDispatch();

  const handleHallChange = (event) => {
    setCurrentHallId(event.target.value);
    setCurrentHall(
      selectedCinema.halls.find((hall) => hall._id === event.target.value)
    );
  };

  const handleAddRow = (row) => {
    if (row.length) {
      const editedPlan = [...currentHall.plan];
      editedPlan.push(row);
      setCurrentHall({ ...currentHall, plan: editedPlan });
    }
  };

  const handleCancel = () => {
    const initialPlan = selectedCinema.halls.find(
      (hall) => hall._id === currentHallId
    );
    setCurrentHall(initialPlan);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await formatRequest(
        "/hall",
        "PATCH",
        token,
        currentHall
      );
      dispatch(cinemaFetchUpdate());
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDeleteRow = (deletedRowId) => {
    const editedPlan = [...currentHall.plan];
    editedPlan.splice(deletedRowId, 1);
    setCurrentHall({ ...currentHall, plan: editedPlan });
  };

  const handleNewHall = () => {
    const hallName = prompt("Please, enter a hall name");
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
            {selectedCinema.name} - {role === ADMIN ? "hall edit" : "hall view"}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
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
            {role === ADMIN && (
              <Button variant="outlined" onClick={handleNewHall}>
                Add a new hall
              </Button>
            )}
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h4">
            {currentHall ? currentHall.name : ""}
          </Typography>
          {currentHall && (
            <HallView
              plan={currentHall.plan}
              role={role}
              onDeleteRow={handleDeleteRow}
            />
          )}
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={10}>
          {role === ADMIN && currentHallId && (
            <HallEdit
              seats={seats}
              onAddRow={handleAddRow}
              onCancel={handleCancel}
              onSave={handleSave}
            />
          )}
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
