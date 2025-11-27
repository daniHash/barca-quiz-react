import { useState } from "react";
import useQuestionsContext from "../hooks/useQuestionsContext";

const StartQuiz = () => {
  const [level, setLevel] = useState("easy");
  const { numOfQuestions, dispatch } = useQuestionsContext();
  return (
    <div className="start">
      <h2>Welcome To The React Quiz!</h2>
      <h3>{numOfQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start", payload: level })}
      >
        Lets,s Start
      </button>
      <select
        name="level"
        id=""
        value={level}
        onChange={() => setLevel(event.target.value)}
      >
        <option value="" disabled>
          Level
        </option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default StartQuiz;
