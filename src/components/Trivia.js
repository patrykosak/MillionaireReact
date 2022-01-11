import { useEffect, useState } from "react";

const Trivia = ({ data, setStop, setQuestionNumber, questionNumber }) => {
  const [question, setQuestion] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [className, setClassName] = useState("answer")
  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) =>{
    setTimeout(()=>{
       callback();
    }, duration)
  }

  const handleClick = (a)=>{
    setSelectedAnswer(a);
    setClassName("answer active")
    delay(3000, ()=>{
      setClassName(a.correct ? "answer correct" : "answer wrong")
    })
    delay(6000, ()=>{
      if(a.correct){
        setQuestionNumber((prev)=>prev+1)
        setSelectedAnswer(null)
      }  
      else{
        setStop(true)
      }
    })
  }

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers?.map((answer) => (
        <div className={selectedAnswer === answer ? className : "answer"} onClick={()=>handleClick(answer)} >{answer?.text}</div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
