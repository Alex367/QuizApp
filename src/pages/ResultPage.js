import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { quizActions } from "../store/quiz-redux";
import classes from "../styles/ResultPage.module.css";

export default function ResultPage() {
  const resultRedux = useSelector((state) => state.quizReducer.result);
  const dispatch = useDispatch();

  const retakeHandler = () => {
    dispatch(quizActions.clearResult());
  };

  let countCorrectAnswers = 0;
  resultRedux.forEach((element) => {
    if (element.isCorrect) {
      countCorrectAnswers++;
    }
  });

  return (
    <section className="main_section">
      <h1>Results: </h1>
      <ol className={classes.result_ul}>
        {resultRedux.map((item) => (
          <li key={item.questionPage}>
            <div>{item.question}</div>
            <div>
              {item.selectedAnswer}
              {item.isCorrect ? (
                <span className={classes.correct}> - Correct</span>
              ) : (
                <span className={classes.incorrect}> - Incorrect</span>
              )}
            </div>
          </li>
        ))}
      </ol>
      <div className={classes.result_total}>
        <span className={classes.correct}>
          Correct answers: {countCorrectAnswers}
        </span>
        <span>Total number of questions: {resultRedux.length}</span>
      </div>
      <div className="homepage_ref">
        <Link to={"/"} onClick={retakeHandler}>
          Retake the quiz
        </Link>
      </div>
    </section>
  );
}
