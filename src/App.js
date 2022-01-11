import "./app.css";
import { useEffect, useState, useMemo } from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";


function App() {
  const [username, setUsername] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0 zł");

  const moneyPyramid = useMemo(() => 
    [
    { id: 1, amount: "500 zł" },
    { id: 2, amount: "1000 zł" },
    { id: 3, amount: "2000 zł" },
    { id: 4, amount: "5000 zł" },
    { id: 5, amount: "10 000 zł" },
    { id: 6, amount: "20 000 zł" },
    { id: 7, amount: "40 000 zł" },
    { id: 8, amount: "75 000 zł" },
    { id: 9, amount: "125 000 zł" },
    { id: 10, amount: "250 000 zł" },
    { id: 11, amount: "500 000 zł" },
    { id: 12, amount: "1 000 000 zł" },
  ].reverse(), []) 
    

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];


  useEffect(()=>{
    questionNumber>1 &&setEarned(moneyPyramid.find(m=> m.id===questionNumber-1).amount) 
  },[moneyPyramid, questionNumber])

  return (
    <div className="app">
      {username ? (
        <>
              <div className="main">
        {stop ? <h1 className="endText"> You earned: {earned} </h1> : (
        <>
        <div className="top">
          <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
        </div>
        <div className="bottom">
          <Trivia data={data} setStop={setStop} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber}/>
        </div>
        </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => {
            return (
              <li
                className={
                  m.id === questionNumber
                    ? "moneyListItem active"
                    : "moneyListItem"
                }
              >
                <span className="moneyListItemNumber">{m.id}</span>
                <span className="moneyListItemAmount">{m.amount}</span>
              </li>
            );
          })}
        </ul>
      </div>
        </>
      ) : <Start setUsername={setUsername} />}
    </div>
  );
}

export default App;
