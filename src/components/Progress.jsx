import useQuestionsContext from "../hooks/useQuestionsContext";

const Progress = () => {
  const { index, numOfQuestions, points, maxPoints, answer } =
    useQuestionsContext();
  return (
    <header className="progress">
      <progress
        max={numOfQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
      <p>
        <strong>
          {points} / {maxPoints}
        </strong>
      </p>
    </header>
  );
};

export default Progress;
