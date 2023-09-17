export default function QuestionItems(props) {
  return (
    <li
      className={props.styles}
      onClick={(event) => props.onConfirm(props.value, props.item)}
    >
      {props.value}
    </li>
  );
}
