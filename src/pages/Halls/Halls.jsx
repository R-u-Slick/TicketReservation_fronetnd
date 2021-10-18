import React, { useEffect, useState } from "react";
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
      if (currentHallId) {
        const response = await formatRequest("/hall", "PATCH", currentHall);
        dispatch(cinemaFetchUpdate());
      } else {
        const response = await formatRequest("/hall", "POST", currentHall);
        const mongoId = response.data;
        const newHall = { ...currentHall, _id: mongoId };
        const hallsList = [...selectedCinema.halls];
        hallsList.push(newHall);
        const updatedCinema = { ...selectedCinema, halls: hallsList };
        await formatRequest("/cinema", "PATCH", updatedCinema);
        dispatch(cinemaFetchUpdate());
        setCurrentHallId(mongoId);
      }
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
    if (hallName) {
      const newHall = {
        name: hallName,
        plan: [],
      };
      setCurrentHallId("");
      setCurrentHall(newHall);
    }
  };

  const handleDeleteHall = async () => {
    try {
      const response = await formatRequest("/hall", "DELETE", {
        id: currentHallId,
      });
      dispatch(cinemaFetchUpdate());
      setCurrentHall("");
    } catch (err) {
      console.log(err);
    }
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignContent: "center",
                  height: 80,
                }}
              >
                <Button variant="outlined" onClick={handleNewHall} mb="1rem">
                  Add a new hall
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleDeleteHall}
                >
                  Delete a hall
                </Button>
              </Box>
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
          {role === ADMIN && currentHall && (
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
