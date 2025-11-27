import { useContext } from "react";
import { QuestionsContext } from "../contexts/QuestionsContext";

const useQuestionsContext = () => {
  const context = useContext(QuestionsContext);
  if (context === undefined)
    throw new Error("Context was used out of provider");
  return context;
};

export default useQuestionsContext;
