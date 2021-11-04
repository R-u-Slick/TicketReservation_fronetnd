import { Grid, Typography, Fab } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box } from "@material-ui/system";
import { PropTypes } from "prop-types";
import { v4 as uuidv4 } from "uuid";

function SeatsInfo({ selectedSeats, onSeatDelete }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" mt="2rem">
          Selected seats
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6">Seats</Typography>
        {selectedSeats.map((seat) => {
          return (
            <Box key={seat.id} sx={{ height: 55 }}>
              <Typography variant="body1">
                {seat.seatPrice.seat.name}
              </Typography>
              <Typography variant="body1">
                Row {Number(seat.coordinate.row) + 1}, seat{" "}
                {Number(seat.coordinate.seat) + 1}
              </Typography>
            </Box>
          );
        })}
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6">Included extras</Typography>
        <Box>
          {selectedSeats.map((seat) => {
            return seat.seatPrice.includedGoods.length ? (
              <Typography key={seat.id} variant="body1" sx={{ height: 55 }}>
                {seat.seatPrice.includedGoods.map((good) => {
                  return ` ${good.name} `;
                })}
              </Typography>
            ) : (
              <Typography key={seat.id} kvariant="body1" sx={{ height: 55 }}>
                No goods included
              </Typography>
            );
          })}
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h6">Price</Typography>
        {selectedSeats.map((seat) => {
          return (
            <Box key={seat.id}>
              <Typography variant="body1" sx={{ height: 55 }}>
                {seat.seatPrice.price} $
              </Typography>
            </Box>
          );
        })}
      </Grid>
      <Grid item xs={2} mt="1.5rem">
        {selectedSeats.map((seat) => {
          return (
            <Box key={seat.id} sx={{ height: 55 }}>
              <Fab
                id={seat.id ? seat.id : seat._id}
                size="small"
                aria-label="delete"
                onClick={onSeatDelete}
                color="secondary"
                sx={{ backgroundColor: "#f73378", color: "white" }}
              >
                <RemoveIcon />
              </Fab>
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
}

SeatsInfo.defaultProps = {
  selectedSeats: [],
  onSeatDelete: () => {},
};

SeatsInfo.propTypes = {
  selectedSeats: PropTypes.array,
  onSeatDelete: PropTypes.func,
};

export default SeatsInfo;
