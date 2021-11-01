import Header from "../../components/Header/Header";
import ConfirmOrder from "./ConfirmOrder";
import { useDispatch, useSelector } from "react-redux";
import { selectOrderData } from "../../store/order/selectors";
import { useEffect, useState } from "react";
import { orderFetch } from "../../store/order/asyncActions";
import formatRequest from "../../helpers/formatRequest";
import { Redirect } from "react-router";
import { sessionFetchUpdate } from "../../store/session/asyncActions";

function ConfirmOrderContainer({ match }) {
  const dispatch = useDispatch();
  const orderList = useSelector(selectOrderData);
  const [selectedOrder, setSelectedOrder] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    dispatch(orderFetch());
  }, []);

  useEffect(() => {
    if (orderList.length) {
      const currentOrder = orderList.find(
        (order) => order._id === match.params.id
      );
      setSelectedOrder(currentOrder);
    }
  }, [orderList]);

  const handleOrder = async (updatedOrder) => {
    await formatRequest("/order", "PATCH", updatedOrder);
    dispatch(sessionFetchUpdate());
    setRedirect(true);
  };

  return (
    <>
      {redirect && <Redirect to="/schedule" />}
      <Header />
      {selectedOrder && (
        <ConfirmOrder order={selectedOrder} onOrder={handleOrder} />
      )}
    </>
  );
}

export default ConfirmOrderContainer;
