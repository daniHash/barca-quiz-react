import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QuestionsProvider } from "./contexts/QuestionsContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QuestionsProvider>
    <App />
  </QuestionsProvider>
);
