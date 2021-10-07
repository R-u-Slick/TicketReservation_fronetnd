import { Box } from "@material-ui/system";
import { PropTypes } from "prop-types";

import {
  Container,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

const HallEdit = ({ seats }) => {
  const [seatTypeId, setSeatTypeId] = useState("");

  const handleSeatChange = (event) => {
    setSeatTypeId(event.target.value);
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
        <Box>
          <Typography variant="body1">Add a new row</Typography>
          <Box>
            <TextField
              id="seatsQty"
              label="Number of seats"
              variant="outlined"
            />
          </Box>
        </Box>
        <Box>
          <Typography variant="body1">Seat type</Typography>
          <Box>
            <Select
              labelId="seat-type-label"
              id="seat-type"
              value={seatTypeId}
              label="Seat type"
              onChange={handleSeatChange}
            >
              {seats.map((seat) => {
                return <MenuItem value={seat._id}>{seat.name}</MenuItem>;
              })}
            </Select>
          </Box>
        </Box>
        <Box>
          <Typography variant="body1">Add a row button</Typography>
        </Box>
      </Box>
    </Container>
  );
};

HallEdit.defaultProps = {
  seats: [],
};

HallEdit.propTypes = {
  seats: PropTypes.array,
};

export default HallEdit;
