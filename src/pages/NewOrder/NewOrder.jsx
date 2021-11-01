import {
  Container,
  Grid,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  Fab,
} from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import "./newOrder.scss";
import HallView from "../../components/HallView/HallView";
import { Box } from "@material-ui/system";
import { v4 as uuidv4 } from "uuid";
import SeatsInfo from "../../components/SeatsInfo/SeatsInfo";
import ExtrasInfo from "../../components/ExtrasInfo/ExtrasInfo";
import { RESERVED } from "../../constants/status";
import { Link, Redirect } from "react-router-dom";

const NewOrder = ({ session, role, onNewOrder, orderId }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [currentGoodId, setCurrentGoodId] = useState("");
  const [orderedGoodsList, setOrderedGoodsList] = useState([]);
  const [currentPlan, setCurrentPlan] = useState([]);

  useEffect(() => {
    if (session) {
      const plan = JSON.parse(JSON.stringify(session.hall.plan));
      const orders = session.orders;
      console.log(orders);
      orders.forEach((order) => {
        if (order.status === "reserved" || order.status === "paid") {
          order.selectedSeats.forEach((place) => {
            const row = place.coordinate.row;
            const seat = place.coordinate.seat;
            plan[row][seat].selected = true;
          });
        }
      });
      setCurrentPlan(plan);
    }
  }, [session]);

  const handleSeatClick = (seat, coordinate) => {
    const seatPrice = session.seatPrice.find(
      (price) => price.seat._id === seat._id
    );
    const seatInfo = {
      id: uuidv4(),
      seatPrice,
      coordinate,
    };
    setSelectedSeats([...selectedSeats, seatInfo]);
    const plan = JSON.parse(JSON.stringify(currentPlan));
    plan[coordinate.row][coordinate.seat].selected = true;
    setCurrentPlan(plan);
  };

  const handleSelectGood = (event) => {
    setCurrentGoodId(event.target.value);
  };

  const handleAddGood = (event) => {
    const currentGoodPrice = session.goodPrice.find(
      (goodPrice) => goodPrice._id === currentGoodId
    );
    if (currentGoodPrice) {
      setOrderedGoodsList([...orderedGoodsList, currentGoodPrice]);
    }
  };

  const handleDeleteGood = (event) => {
    const deletedGoodId = event.currentTarget.id;
    const goods = [...orderedGoodsList];
    for (let i = 0; i < goods.length; i++) {
      if (orderedGoodsList[i]._id === deletedGoodId) {
        goods.splice(i, 1);
        break;
      }
    }
    setOrderedGoodsList(goods);
  };

  const handleDeleteSeat = (event) => {
    const deletedSeatId = event.currentTarget.id;
    const seats = [...selectedSeats];
    for (let i = 0; i < seats.length; i++) {
      if (selectedSeats[i].id === deletedSeatId) {
        const seat = seats.splice(i, 1)[0];
        const plan = JSON.parse(JSON.stringify(currentPlan));
        plan[seat.coordinate.row][seat.coordinate.seat].selected = false;
        setCurrentPlan(plan);
        setSelectedSeats(seats);
        break;
      }
    }
  };

  const handleNewOrder = () => {
    const newOrder = {
      selectedSeats,
      orderedGoods: orderedGoodsList,
      status: RESERVED,
    };
    onNewOrder(newOrder);
  };

  if (orderId) {
    return <Redirect to={`/confirmOrder/${orderId}`} />;
  }

  return (
    <Container
      sx={{
        mt: "1rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">Create a new order</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">Please choose your seats </Typography>
        </Grid>
        <Grid item xs={3}>
          <img src={session.film.image} className="newOrder_image" />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">{session.film.name}</Typography>
          <Typography variant="body1">
            {session.film.duration} minutes
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: 800,
            }}
          >
            <HallView plan={currentPlan} onSeatClick={handleSeatClick} />
            {Boolean(selectedSeats.length) && (
              <Box>
                <SeatsInfo
                  selectedSeats={selectedSeats}
                  onSeatDelete={handleDeleteSeat}
                />
                <ExtrasInfo
                  orderedGoodsList={orderedGoodsList}
                  onDeleteGood={handleDeleteGood}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: 160,
                  }}
                >
                  <FormControl variant="standard">
                    <Select
                      id="selectGoods"
                      value={currentGoodId}
                      label="Hall"
                      onChange={handleSelectGood}
                    >
                      <MenuItem value="">None</MenuItem>
                      {session.goodPrice.map((item) => {
                        return (
                          <MenuItem key={item._id} value={item._id}>
                            {item.good.name} - {item.price} $
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  <Fab
                    size="small"
                    color="primary"
                    aria-label="add"
                    onClick={handleAddGood}
                  >
                    <AddIcon />
                  </Fab>
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={4} />
                  <Grid item xs={4} mt="1rem">
                    <Typography variant="h4">Total</Typography>
                  </Grid>
                  <Grid item xs={4} mt="1rem">
                    <Typography variant="h4">
                      {selectedSeats.reduce((total, seat) => {
                        return total + Number(seat.seatPrice.price);
                      }, 0) +
                        orderedGoodsList.reduce((total, good) => {
                          return total + Number(good.price);
                        }, 0) +
                        " $"}
                    </Typography>
                  </Grid>
                  <Grid item xs={8} />
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      sx={{ width: "100%" }}
                      onClick={handleNewOrder}
                    >
                      Create an order
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

NewOrder.defaultProps = {
  session: null,
  role: "",
  onNewOrder: () => {},
  orderId: "",
};

NewOrder.propTypes = {
  session: PropTypes.object,
  role: PropTypes.string,
  onNewOrder: PropTypes.func,
  orderId: PropTypes.string,
};

export default NewOrder;
