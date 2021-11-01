import { PropTypes } from "prop-types";
import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";

function SessionExpireTimer({ startTime, sessionTimeout }) {
  //   const [start, setStart] = useState("");
  const [timeLeft, setTimeLeft] = useState("");
  const [isExpired, setIsExpired] = useState(false);

  const counter = () => {
    const start = new Date(startTime);
    const currentTime = new Date();
    const timePassed = (currentTime - start) / 1000; //in seconds
    const timeLeft = sessionTimeout - timePassed;
    if (timeLeft < 0) {
      alert("your session has been expired");
    }
    const minutesLeft = parseInt(timeLeft / 60);
    const secondsLeft = parseInt(timeLeft % 60);
    setTimeLeft(
      `${minutesLeft > 9 ? minutesLeft : "0" + minutesLeft} : ${
        secondsLeft > 9 ? secondsLeft : "0" + secondsLeft
      }`
    );
  };

  useEffect(() => {
    const intervalId = setInterval(counter, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <span> {timeLeft} </span>;
}

SessionExpireTimer.defaultProps = {};

SessionExpireTimer.propTypes = {
  startTime: PropTypes.string.isRequired,
  sessionTimeout: PropTypes.number.isRequired,
};

export default SessionExpireTimer;
