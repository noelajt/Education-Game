import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Grid({ playerPosition, isPlaying }) {
  const [enemyPosition, setEnemyPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextBlock = enemyPosition + 1;
      setEnemyPosition(nextBlock);
      if (nextBlock === playerPosition) {
        isPlaying();
      } else if (nextBlock === 12) {
        isPlaying();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [enemyPosition, playerPosition, isPlaying]);

  let blockOrder = [3, 4, 5, 6, 2, 9, 8, 7, 1, 10, 11, 12];
  let BLOCKS = blockOrder.map((index) => (
    <GridBlockWrapper key={index}>
      {playerPosition === index && (
        <Character src="https://png.pngtree.com/png-vector/20221002/ourmid/pngtree-cute-cartoon-animal-head-mouse-png-image_6254019.png" />
      )}
      {enemyPosition === index && (
        <Character src="https://static.vecteezy.com/system/resources/previews/009/665/304/original/cute-kitty-cat-head-cartoon-element-free-png.png" />
      )}
      <GridBlock
        src={
          index === 1 || index === 2 || index === 3
            ? "https://img.freepik.com/premium-vector/stone-wall-from-bricks-rock-with-old-moss-game-background-cartoon-style_191307-533.jpg?w=2000"
            : "https://media.istockphoto.com/id/1287348587/vector/green-lawn-view-from-top-grass-and-bushes-summer-field.jpg?s=170667a&w=0&k=20&c=4IPMvqC-vACCeQKm32XrENwcFrwjpmzM5sZv_4WJ0ko="
        }
      />
    </GridBlockWrapper>
  ));

  return <GridWrapper>{BLOCKS}</GridWrapper>;
}

const GridWrapper = styled.article`
  min-width: clamp(320px, 500px, 100%);
  border-radius: 10px;
  border: solid;
  border-width: 2px;
  border-color: var(--borderColor);
  background-color: rgb(255, 227, 227);
  padding: 15px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;

  margin: 0;
  position: relative;

  div:nth-child(4n + 1) {
    border-color: none;
    z-index: 1;
  }
`;

const GridBlockWrapper = styled.div`
  width: 100%;
  padding-bottom: 90%;
  border-radius: 5px;
  border: solid;
  border-width: 2px;
  border-color: black;
  background-color: whitesmoke;
  display: flex;
  flex-grow: 1;
  margin: 0;
  position: relative;
`;

const GridBlock = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 2px;
`;

const Character = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 3;
`;
