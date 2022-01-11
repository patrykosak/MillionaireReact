import { useEffect, useState } from "react";

const Trivia = ({ data, setTimeOut, setQuestionNumber, questionNumber }) => {
  const [question, setQuestion] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClick = (a)=>{
    setSelectedAnswer(a);
  }

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers?.map((answer) => (
        <div className={selectedAnswer === answer ? "answer active" : "answer"} onClick={()=>handleClick(answer)} >{answer?.text}</div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
