import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Typography, Button } from "@material-ui/core";

import { sessionFetch } from "../../store/session/asyncActions";
import { selectSessionData } from "../../store/session/selectors";

import Header from "../../components/Header/HeaderContainer";
import Schedule from "./Schedule";
import { Link } from "react-router-dom";
import orderTimeoutCheck from "../../helpers/orderTimeoutCheck";

const ScheduleContainer = () => {
  const dispatch = useDispatch();
  const sessionState = useSelector(selectSessionData);
  const [sessionList, setSessionList] = useState(sessionState);
  const [selectedSessionId, setSelectedSessionId] = useState("");
  console.log(sessionState);

  useEffect(() => {
    dispatch(sessionFetch());
  }, []);

  useEffect(() => {
    if (sessionState.length) {
      const sessionData = orderTimeoutCheck(sessionState);
      setSessionList(sessionData);
    }
  }, [sessionState]);

  const handleRowSelect = (selectedRowId) => {
    setSelectedSessionId(selectedRowId);
  };

  if (!sessionList.length) {
    return null;
  }

  return (
    <>
      <Header />
      <Container
        sx={{
          mt: "1rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2">Schedule</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body1">Please select the session</Typography>
          </Grid>
          <Grid item xs={2}>
            <Link
              to={`/newOrder/${selectedSessionId}`}
              className="cinemas__button"
            >
              <Button
                sx={{ width: "100%" }}
                variant="contained"
                disabled={!Boolean(selectedSessionId)}
              >
                Buy a ticket
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Schedule sessions={sessionList} onRowSelect={handleRowSelect} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ScheduleContainer;
