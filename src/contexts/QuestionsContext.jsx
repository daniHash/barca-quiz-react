import { createContext, useEffect, useReducer } from "react";

const QuestionsContext = createContext();
const SEC_PER_QUE = 30;
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondRemaining: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondRemaining: state.questions.length * SEC_PER_QUE,
      };
    case "answered":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload - 1 === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "next":
      return { ...state, index: state.index + 1, answer: null };
    case "finished":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "reset":
      return {
        ...state,
        status: "ready",
        index: 0,
        answer: null,
        points: 0,
      };
    case "timer":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action Unknown");
  }
};

const QuestionsProvider = ({ children }) => {
  const [
    { questions, status, index, answer, points, highScore, secondRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);
  const maxPoints = questions.reduce((prev, curr) => prev + curr.points, 0);
  const numOfQuestions = questions.length;
  useEffect(() => {
    fetch(`http://localhost:3000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highScore,
        secondRemaining,
        numOfQuestions,
        maxPoints,
        dispatch,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export { QuestionsProvider, QuestionsContext };
