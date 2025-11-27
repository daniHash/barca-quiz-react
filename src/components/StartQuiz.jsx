import useQuestionsContext from "../hooks/useQuestionsContext";

const StartQuiz = () => {
  const { numOfQuestions, dispatch } = useQuestionsContext();
  return (
    <div className="start">
      <h2>Welcome To The React Quiz!</h2>
      <h3>{numOfQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets,s Start
      </button>
    </div>
  );
};

export default StartQuiz;
