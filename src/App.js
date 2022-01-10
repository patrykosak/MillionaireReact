import "./app.css";
import { useState } from "react";
import Trivia from "./components/Trivia";

const moneyPyramid = [
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
].reverse();

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Trivia />
        </div>
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
    </div>
  );
}

export default App;
