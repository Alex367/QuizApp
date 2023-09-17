import { useState } from "react";
import QuestionList from "../components/QuestionList";

const DUMMY_DATA = [
  {
    question_1: {
      question: "What are the colours of the Olympic rings ?",
      answer: {
        "Blue, Yellow, Black, Green and Red": true,
        "Blue, Yellow, Black and Green": false,
        "Blue, Yellow and Black": false,
        "Blue, Yellow and Pink": false,
      },
    },
  },
  {
    question_2: {
      question: "How many horses are on each team in polo match ?",
      answer: { 1: false, 2: false, 4: true, 6: false },
    },
  },
  {
    question_3: {
      question: "Which colour pill does Neo swallow in The Matrix ?",
      answer: { "Red": true, "Blue": false, "Green": true, "Black": false },
    },
  },
  {
    question_3: {
      question: "What is the capital city of Autralia ?",
      answer: { "Canberra": true, "London": false, "Hamburg": false, "Prague": false },
    },
  },
];

export default function QuestionPage() {
  const [isQuestionCount, setIsQuestionCount] = useState(0);

  const incrementHandler = () => {
    setIsQuestionCount((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setIsQuestionCount((prev) => prev - 1);
  };

  return (
    <section className="main_section">
      <h1>
        Question <span>{isQuestionCount + 1}</span>
      </h1>
      <QuestionList
        data={DUMMY_DATA}
        count={isQuestionCount}
        onIncrementCount={incrementHandler}
        onDecrementCount={decrementHandler}
      />
    </section>
  );
}
