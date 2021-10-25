import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sessionFetch } from "../../store/session/asyncActions";
import { selectSessionData } from "../../store/session/selectors";
import { selectUserData } from "../../store/user/selectors";
import NewOrder from "./NewOrder";

import Header from "../../components/Header/HeaderContainer";

const NewOrderContainer = ({ match }) => {
  const dispatch = useDispatch();
  const sessionData = useSelector(selectSessionData);
  const [selectedSession, setSelectedSession] = useState("");
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

  return (
    <>
      <Header />
      <NewOrder
        session={selectedSession}
        role={userData ? userData.role : null}
      />
    </>
  );
};

export default NewOrderContainer;
