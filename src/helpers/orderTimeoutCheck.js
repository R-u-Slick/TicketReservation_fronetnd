import SESSION_TIMEOUT from "../constants/expireTime";
import formatRequest from "./formatRequest";
SESSION_TIMEOUT;

const orderTimeoutCheck = (sessionState) => {
  const sessionData = JSON.parse(JSON.stringify(sessionState));
  sessionData.forEach((session) => {
    session.orders.forEach(async (order) => {
      if (order.status === "reserved") {
        const currentTime = new Date();
        const creationTime = new Date(order.createdAt);
        const timePassed = (currentTime - creationTime) / 1000; //in seconds
        const timeLeft = SESSION_TIMEOUT - timePassed;
        if (timeLeft < 0) {
          order.status = "cancelled";
          await formatRequest("/order", "PATCH", order);
        }
      }
    });
  });
  return sessionData;
};

export default orderTimeoutCheck;
