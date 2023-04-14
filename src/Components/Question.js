import styled from "styled-components";
import { useState } from "react";

export default function Question({ questionBank, onAnswer }) {
  const [answer, setAnswer] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [type, setType] = useState("normal");

  function update(userAnswer, question) {
    setAnswer(userAnswer);
  }

  let isCorrect = answer === questionBank[currentQuestion].correctAnswer;

  function checkAnswer() {
    if (isCorrect) {
      setType("correct");
      onAnswer();
      setCurrentQuestion((index) => {
        if (index === questionBank.length - 1) {
          index = 0;
          return index;
        }
        return index + 1;
      });
      setAnswer("");
      setTimeout(() => {
        setType("normal");
      }, 300);
    } else if (!isCorrect) {
      setType("wrong");
      setAnswer("");
      setTimeout(() => {
        setType("normal");
      }, 500);
    }
  }

  return (
    <Wrapper style={STYLES[type]}>
      <Field>
        <label htmlFor="answer">{questionBank[currentQuestion].question}</label>
        <input
          type="text"
          onChange={(e) => update(e.target.value, "answer")}
          value={answer}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              checkAnswer();
            }
          }}
        />
      </Field>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 450px;
  height: 100px;
  border-radius: 5px;
  border: solid;
  border-width: 2px;
  border-color: var(--borderColor);
  background-color: var(--backgroundColor);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: relative;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 8px;
    width: 400px;
    border: solid;
    border-radius: 5px;
    box-shadow: var(--shadow-elevation-medium);
  }

  label {
    padding-bottom: 10px;
    text-transform: uppercase;
    font-size: 1rem;
    color: var(--gray-300);
  }
`;
const STYLES = {
  correct: {
    "--borderColor": "green",
    "--backgroundColor": "rgb(152, 232, 137)"
  },
  normal: {
    "--borderColor": "rgb(105, 110, 106)",
    "--backgroundColor": "pink"
  },
  wrong: {
    "--borderColor": "red",
    "--backgroundColor": "rgb(255, 107, 131)"
  }
};
