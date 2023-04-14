import "./styles.css";
import React, { useState } from "react";
import Question from "./Components/Question.js";
import Grid from "./Components/Grid.js";
import Screen from "./Components/Screen.js";

const QUESTION_BANK = [
  {
    question: "What is 2 + 2?",
    correctAnswer: "4"
  },
  {
    question: "What is 5 + 2?",
    correctAnswer: "7"
  },
  {
    question: "What is 8 + 2?",
    correctAnswer: "10"
  },
  {
    question: "What is 9 x 5?",
    correctAnswer: "45"
  },
  {
    question: "What is 4 x 5?",
    correctAnswer: "20"
  },
  {
    question: "What is 9 x 6?",
    correctAnswer: "54"
  },
  {
    question: "What is 9 x 11?",
    correctAnswer: "99"
  },
  {
    question: "What is 10 x 5?",
    correctAnswer: "50"
  },
  {
    question: "What is 3 x 8?",
    correctAnswer: "24"
  }
];

export default function App() {
  const [gamePlaying, setGamePlaying] = useState(false);
  const [playerPosition, setPlayerPosition] = useState(4);
  const [screenType, setScreenType] = useState("start");
  const [showScreen, setShowScreen] = useState(true);

  function handleAnswer() {
    setPlayerPosition((position) => {
      if (position < 12) {
        return position + 1;
      } else if (position === 12) {
        setGamePlaying(false);
        endGame();
        return position;
      }
    });
  }

  function playGame() {
    setPlayerPosition(4);
    setGamePlaying(true);
    setShowScreen(false);
  }

  function endGame() {
    setPlayerPosition(4);
    setScreenType("end");
    setShowScreen(true);
    setTimeout(() => {
      setGamePlaying(false);
    }, 1000);
  }

  return (
    <div className="App">
      {gamePlaying ? (
        <>
          <Question questionBank={QUESTION_BANK} onAnswer={handleAnswer} />
          <Grid playerPosition={playerPosition} isPlaying={endGame} />
        </>
      ) : (
        <Screen type={screenType} onClick={() => playGame()} />
      )}
    </div>
  );
}
