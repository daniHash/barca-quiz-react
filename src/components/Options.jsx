import useQuestionsContext from "../hooks/useQuestionsContext";

const Options = () => {
  const { questions, dispatch, answer, index } = useQuestionsContext();
  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {questions[index].options.map((q, i) => (
        <button
          className={`btn btn-option ${answer === i + 1 && "answer"} ${
            hasAnswer
              ? questions[index].correctOption === i
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => dispatch({ type: "answered", payload: i + 1 })}
          key={q}
          disabled={hasAnswer}
        >
          {q}
        </button>
      ))}
    </div>
  );
};

export default Options;
