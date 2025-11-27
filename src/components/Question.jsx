import useQuestionsContext from "../hooks/useQuestionsContext";
import Options from "./Options";

const Question = () => {
  const { questions, index } = useQuestionsContext();
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options />
    </div>
  );
};

export default Question;
