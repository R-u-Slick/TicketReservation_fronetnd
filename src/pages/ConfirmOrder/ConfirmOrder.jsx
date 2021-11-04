import { PropTypes } from "prop-types";
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
import SessionExpireTimer from "../../components/SessionExpireTimer/SessionExpireTimer";
import SESSION_TIMEOUT from "../../constants/expireTime";
import SeatsInfo from "../../components/SeatsInfo/SeatsInfo";
import ExtrasInfo from "../../components/ExtrasInfo/ExtrasInfo";
import { useState } from "react";
import { useEffect } from "react";

function ConfirmOrder({ order, onOrder }) {
  const [currentOrder, setCurrentOrder] = useState(order);
  // console.log(currentOrder);

  const handleDeleteSeat = (event) => {
    const deletedSeatId = event.currentTarget.id;
    const seats = [...currentOrder.selectedSeats];
    for (let i = 0; i < seats.length; i++) {
      if (seats[i]._id === deletedSeatId) {
        seats.splice(i, 1);
        const updatedOrder = { ...currentOrder, selectedSeats: seats };
        setCurrentOrder(updatedOrder);
        break;
      }
    }
  };

  const handleDeleteGood = (event) => {
    const deletedGoodId = event.currentTarget.id;
    const goods = [...currentOrder.orderedGoods];
    for (let i = 0; i < goods.length; i++) {
      if (goods[i]._id === deletedGoodId) {
        goods.splice(i, 1);
        const updatedOrder = { ...currentOrder, orderedGoods: goods };
        setCurrentOrder(updatedOrder);
        break;
      }
    }
  };

  const handleCancelOrder = () => {
    const cancelledOrder = { ...order, status: "cancelled" };
    alert("Order cancelled");
    console.log(cancelledOrder);
    onOrder(cancelledOrder);
  };

  const handleOrderSave = () => {
    const savedOrder = { ...order, status: "paid" };
    alert("Order paid");
    onOrder(savedOrder);
  };

  return (
    <Container
      sx={{
        mt: "1rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">Confirm your order</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">
            Your session will expire in
            <SessionExpireTimer
              startTime={order.createdAt}
              sessionTimeout={SESSION_TIMEOUT}
            />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SeatsInfo
            selectedSeats={currentOrder.selectedSeats}
            onSeatDelete={handleDeleteSeat}
          />
          {Boolean(order.orderedGoods.length) && (
            <ExtrasInfo
              orderedGoodsList={currentOrder.orderedGoods}
              onDeleteGood={handleDeleteGood}
            />
          )}
        </Grid>
        <Grid item xs={7} />
        <Grid item xs={2}>
          <Button
            variant="outlined"
            sx={{ width: "100%" }}
            onClick={handleCancelOrder}
          >
            Cancel
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" onClick={handleOrderSave}>
            Confirm and pay
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

ConfirmOrder.defaultProps = {
  order: {},
  onOrder: () => {},
};

ConfirmOrder.propTypes = {
  order: PropTypes.object,
  onOrder: PropTypes.func,
};

export default ConfirmOrder;
