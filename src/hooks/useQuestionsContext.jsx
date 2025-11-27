import { useContext } from "react";
import { QuestionsContext } from "../contexts/QuestionsContext";
// const SEC_PER_QUE = 30;
// const initialState = {
//   questions: [],
//   // loading,error,ready,active,finished
//   status: "loading",
//   index: 0,
//   answer: null,
//   points: 0,
//   highScore: 0,
//   secondRemaining: null,
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "dataReceived":
//       return {
//         ...state,
//         questions: action.payload,
//         status: "ready",
//       };
//     case "dataFailed":
//       return {
//         ...state,
//         status: "error",
//       };
//     case "start":
//       return {
//         ...state,
//         status: "active",
//         secondRemaining: state.questions.length * SEC_PER_QUE,
//       };
//     case "answered":
//       const question = state.questions.at(state.index);
//       return {
//         ...state,
//         answer: action.payload,
//         points:
//           action.payload - 1 === question.correctOption
//             ? state.points + question.points
//             : state.points,
//       };
//     case "next":
//       return { ...state, index: state.index + 1, answer: null };
//     case "finished":
//       return {
//         ...state,
//         status: "finished",
//         highScore:
//           state.points > state.highScore ? state.points : state.highScore,
//       };
//     case "reset":
//       return {
//         ...state,
//         status: "ready",
//         index: 0,
//         answer: null,
//         points: 0,
//       };
//     case "timer":
//       return {
//         ...state,
//         secondRemaining: state.secondRemaining - 1,
//         status: state.secondRemaining === 0 ? "finished" : state.status,
//       };
//     default:
//       throw new Error("Action Unknown");
//   }
// };

const useQuestionsContext = () => {
  const context = useContext(QuestionsContext);
  if (context === undefined)
    throw new Error("Context was used out of provider");
  return context;
};

export default useQuestionsContext;
