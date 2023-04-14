import styled from "styled-components";
export default function Screen({ type, onClick }) {
  let text;
  let buttonText;
  if (type === "start") {
    text = "WELCOME!";
    buttonText = "START";
  } else if (type === "end") {
    text = "GOOD GAME!";
    buttonText = "PLAY AGAIN";
  }

  return (
    <Wrapper>
      <h1>{text}</h1>
      <Button onClick={onClick}>{buttonText}</Button>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 450px;
  height: 200px;
  border-radius: 5px;
  border: solid;
  border-width: 2px;
  border-color: var(--borderColor);
  background-color: pink;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: relative;
`;
const Button = styled.button`
  border-radius: 4px;
  border-width: 2px;
  background-color: whitesmoke;
`;
