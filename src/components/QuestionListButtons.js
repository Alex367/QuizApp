import classes from "../styles/QuestionListButtons.module.css";
import { useNavigate } from "react-router-dom";

export default function QuestionListButtons(props) {
  const navigate = useNavigate();

  return (
    <div className={classes.question_buttons}>
      {props.count > 0 && (
        <button
          onClick={props.onDecrementCount}
          className={`${classes.btn} ${classes.btn_back}`}
        >
          Back
        </button>
      )}
      {props.count + 1 === props.data.length ? (
        <button
          onClick={() => {
            navigate("/result");
          }}
          disabled={props.isNextDisabled}
          className={classes.btn}
        >
          Check results
        </button>
      ) : (
        <button
          onClick={props.onIncrementCount}
          disabled={props.isNextDisabled}
          className={classes.btn}
        >
          Next
        </button>
      )}
    </div>
  );
}
