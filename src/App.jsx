import Header from "./components/Header";
import Main from "./components/Main";
import Error from "./components/Error";
import Loader from "./components/Loader";
import StartQuiz from "./components/StartQuiz";
import Question from "./components/Question";
import NextBtn from "./components/NextBtn";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";
import Footer from "./components/Footer";
import useQuestionsContext from "./hooks/useQuestionsContext";
const App = () => {
  const { status, answer } = useQuestionsContext();
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "error" ? (
          <Error />
        ) : status === "loading" ? (
          <Loader />
        ) : status === "active" ? (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              {answer && <NextBtn />}
            </Footer>
          </>
        ) : status === "finished" ? (
          <FinishScreen />
        ) : (
          <StartQuiz />
        )}
      </Main>
    </div>
  );
};

export default App;
