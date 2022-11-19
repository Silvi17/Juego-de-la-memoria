import { useEffect, useState } from "react";

export const useTimeGame = (initialState = 0) => {
  let myInterval;
  const [time, setTime] = useState(initialState);
  const [controlTimer, setControlTimer] = useState(true);

  function myTimer() {
    setTime((time) => time - 1);
  }

  function stopTimer() {
    setControlTimer(false);
  }

  function resumeTimer() {
    setControlTimer(true);
  }

  useEffect(() => {
    if (time <= 0) return;

    if (controlTimer) {
      myInterval = setInterval(myTimer, 1000);
    }

    return () => {
      clearInterval(myInterval);
    };
  }, [time]);

  return { time, stopTimer, resumeTimer, setTime };
};