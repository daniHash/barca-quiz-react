import { useEffect } from "react";
import useQuestionsContext from "../hooks/useQuestionsContext";

const Timer = () => {
  const { dispatch, secondRemaining } = useQuestionsContext();
  const min = Math.floor(secondRemaining / 60);
  const sec = secondRemaining % 60;
  useEffect(() => {
    const time = setInterval(() => {
      dispatch({ type: "timer" });
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [dispatch]);

  return (
    <div className="timer">
      {min < 10 && "0"}
      {min} : {sec < 10 && "0"}
      {sec}
    </div>
  );
};

export default Timer;
