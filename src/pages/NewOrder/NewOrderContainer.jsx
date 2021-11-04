import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sessionFetch,
  sessionFetchUpdate,
  sessionPatch,
} from "../../store/session/asyncActions";
import { selectSessionData } from "../../store/session/selectors";
import { selectUserData } from "../../store/user/selectors";
import NewOrder from "./NewOrder";
import formatRequest from "../../helpers/formatRequest";
import { setOrderAction, setOrderErrorAction } from "../../store/order/slice";

import Header from "../../components/Header/HeaderContainer";
import { userFetch } from "../../store/user/asyncActions";

const NewOrderContainer = ({ match }) => {
  const dispatch = useDispatch();
  const sessionData = useSelector(selectSessionData);
  const [selectedSession, setSelectedSession] = useState("");
  const [orderId, setOrderId] = useState("");
  const userData = useSelector(selectUserData);

  useEffect(() => {
    dispatch(sessionFetch());
  }, []);

  useEffect(() => {
    const currentSession = sessionData.find(
      (session) => session._id === match.params.id
    );
    setSelectedSession(currentSession);
  }, [sessionData]);

  const handleNewOrder = async (newOrder) => {
    try {
      const response = await formatRequest("/order", "POST", newOrder);
      const dbOrderId = response.data._id;
      setOrderId(dbOrderId);
      const orders = [...selectedSession.orders, dbOrderId];
      const updatedSessionData = { ...selectedSession, orders };
      await formatRequest("/session", "PATCH", updatedSessionData);
      dispatch(sessionFetchUpdate());
      const userOrders = [...userData.orders, dbOrderId];
      const updatedUserData = { ...userData, orders: userOrders };
      await formatRequest("/user", "PATCH", updatedUserData);
      dispatch(userFetch());
    } catch (err) {
      console.log(err);
    }
  };

  if (!selectedSession) {
    return null;
  }
  return (
    <>
      <Header />
      <NewOrder
        session={selectedSession}
        role={userData ? userData.role : null}
        onNewOrder={handleNewOrder}
        orderId={orderId}
      />
    </>
  );
};

export default NewOrderContainer;
