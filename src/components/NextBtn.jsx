import useQuestionsContext from "../hooks/useQuestionsContext";

const NextBtn = () => {
  const { dispatch, index, numOfQuestions } = useQuestionsContext();
  if (index + 1 === numOfQuestions)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finish
      </button>
    );
  if (index + 1 < numOfQuestions)
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: "next" })}>
        Next
      </button>
    );
};

export default NextBtn;
