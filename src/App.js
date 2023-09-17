import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import ResultPage from "./pages/ResultPage";
import "./styles/normalize.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/question" element={<QuestionPage />}></Route>
        <Route path="/result" element={<ResultPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
