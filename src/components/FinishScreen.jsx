import useQuestionsContext from "../hooks/useQuestionsContext";

const FinishScreen = () => {
  const { points, maxPoints, highScore, dispatch } = useQuestionsContext();
  let percentage = 0;
  let emoji;
  if (points > 0) {
    percentage = (points * 100) / maxPoints;
  }
  if (percentage === 100) emoji = "🎖️";
  if (percentage >= 80 && percentage < 100) emoji = "🌟";
  if (percentage >= 50 && percentage < 80) emoji = "😊";
  if (percentage > 0 && percentage < 50) emoji = "👎";
  if (percentage === 0) emoji = "🙅‍♂️";

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {maxPoints} (
        {Math.floor(percentage)}%)
      </p>
      <p className="highscore">Highscore : {highScore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart
      </button>
    </>
  );
};

export default FinishScreen;
