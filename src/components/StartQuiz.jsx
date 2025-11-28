import { useState } from "react";
import useQuestionsContext from "../hooks/useQuestionsContext";

const StartQuiz = () => {
  const [level, setLevel] = useState("easy");
  const { numOfQuestions, dispatch } = useQuestionsContext();
  return (
    <div className="start">
      <h2>Welcome To The Barca Quiz!</h2>
      <h3 style={{ width: "600px", textAlign: "center" }}>
        {numOfQuestions / 3} questions to test Your information about Barça
      </h3>
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
