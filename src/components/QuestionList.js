import QuestionItems from "./QuestionItems";
import classes from "../styles/QuestionList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { quizActions } from "../store/quiz-redux";
import QuestionListButtons from "./QuestionListButtons";

export default function QuestionList(props) {
  const resultRedux = useSelector((state) => state.quizReducer.result);
  const dispatch = useDispatch();

  // extract data per page
  const data = props.data[props.count];
  const question = Object.values(data)[0].question;
  const answer = Object.values(data)[0].answer;

  const answerHandler = (key, value) => {
    dispatch(
      quizActions.saveResult({
        question,
        selectedAnswer: key,
        questionPage: props.count,
        isCorrect: value,
      })
    );
  };

  let defaultStyle,
    selectedAnswerRedux,
    selectedAnswerReduxStyle,
    isNextDisabled;

  if (
    resultRedux.findIndex((item) => item.questionPage === props.count) === -1
  ) {
    defaultStyle = classes.answer_item;
    isNextDisabled = true;
  } else {
    defaultStyle = `${classes.answer_item} ${classes.disabled}`;
    selectedAnswerRedux = resultRedux[props.count].selectedAnswer;
    isNextDisabled = false;
    if (resultRedux[props.count].isCorrect) {
      selectedAnswerReduxStyle = classes.correct;
    } else {
      selectedAnswerReduxStyle = classes.incorrect;
    }
  }

  return (
    <div className={classes.question_container}>
      <div className={classes.question}>{question}</div>
      <ul>
        {Object.keys(answer).map((key) => {
          if (key === selectedAnswerRedux) {
            return (
              <QuestionItems
                key={key.toString()}
                value={key}
                item={answer[key]}
                onConfirm={answerHandler}
                styles={`${defaultStyle} ${selectedAnswerReduxStyle}`}
              />
            );
          } else {
            return (
              <QuestionItems
                key={key.toString()}
                value={key}
                item={answer[key]}
                onConfirm={answerHandler}
                styles={defaultStyle}
              />
            );
          }
        })}
      </ul>
      <QuestionListButtons
        onDecrementCount={props.onDecrementCount}
        count={props.count}
        data={props.data}
        isNextDisabled={isNextDisabled}
        onIncrementCount={props.onIncrementCount}
      />
    </div>
  );
}
