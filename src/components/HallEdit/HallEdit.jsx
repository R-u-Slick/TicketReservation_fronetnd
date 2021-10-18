import { Box } from "@material-ui/system";
import { PropTypes } from "prop-types";

import {
  Container,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
  Button,
  FormHelperText,
} from "@material-ui/core";
import { useState } from "react";

const HallEdit = ({ seats, onAddRow, onCancel, onSave }) => {
  const MAX_SEATS = 20;
  const [seatTypeId, setSeatTypeId] = useState("");
  const [currentSeatNumber, setCurrentSeatNumber] = useState("");
  const [currentSeatType, setCurrentSeatType] = useState("");
  const [seatError, setSeatError] = useState(false);
  const [seatTypeError, setSeatTypeError] = useState(false);

  const handleSeatNumberChange = (event) => {
    const seatNumber = Number(event.target.value);
    if (seatNumber > 0 && seatNumber <= MAX_SEATS) {
      setCurrentSeatNumber(event.target.value);
      setSeatError(false);
      return;
    }
    setSeatError(true);
    setCurrentSeatNumber(event.target.value);
  };

  const handleSeatTypeChange = (event) => {
    if (event.target.value) {
      setSeatTypeError(false);
      setSeatTypeId(event.target.value);
      const seatType = seats.find((seat) => seat._id === event.target.value);
      setCurrentSeatType(seatType);
      return;
    }
    setSeatTypeId(event.target.value);
    setCurrentSeatType("");
    setSeatTypeError(true);
  };

  const handleAddRow = () => {
    if (currentSeatNumber && currentSeatType && !seatError && !seatTypeError) {
      const newRow = [];
      for (let i = 0; i < currentSeatNumber; i++) {
        newRow.push(currentSeatType);
      }
      onAddRow(newRow);
    }
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
        mt="2rem"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
          }}
        >
          <TextField
            error={seatError}
            id="seatsQty"
            label="Number of seats"
            variant="outlined"
            sx={{ width: 150 }}
            value={currentSeatNumber}
            onChange={handleSeatNumberChange}
            helperText={seatError ? "Enter a number between 1 and 20" : ""}
          />
        </Box>
        <Box
          sx={{
            minWidth: 220,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="select-type-label">Seat type</InputLabel>
            <Select
              error={seatTypeError}
              labelId="seat-type-label"
              id="seat-type"
              value={seatTypeId}
              label="Seat type"
              onChange={handleSeatTypeChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {seats.map((seat) => {
                return (
                  <MenuItem key={seat._id} value={seat._id}>
                    {seat.name}
                  </MenuItem>
                );
              })}
            </Select>
            {seatTypeError && (
              <FormHelperText error>Choose a seat type</FormHelperText>
            )}
          </FormControl>
          {currentSeatType && (
            <Box
              mt="0.75rem"
              sx={{
                background: currentSeatType.color,
                width: `${2 * currentSeatType.capacity}rem`,
                height: "2rem",
                borderRadius: currentSeatType.capacity > 1 ? "1rem" : "50%",
              }}
            />
          )}
        </Box>
        <Box mt="0.75rem">
          <Button variant="outlined" onClick={handleAddRow}>
            Add a row
          </Button>
        </Box>
      </Box>
      <Box
        mt="2rem"
        sx={{ display: "flex", justifyContent: "end", maxWidth: "90%" }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between", width: 180 }}
        >
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="contained" onClick={onSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

HallEdit.defaultProps = {
  seats: [],
  onAddRow: () => {},
  onCancel: () => {},
  onSave: () => {},
};

HallEdit.propTypes = {
  seats: PropTypes.array,
  onAddRow: PropTypes.func,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
};

export default HallEdit;
