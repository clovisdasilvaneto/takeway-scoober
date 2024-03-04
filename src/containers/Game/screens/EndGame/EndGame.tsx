import { selectIsWinner } from "@/modules/gameInfo/gameInfo";
import React from "react";
import { useSelector } from "react-redux";
import { EndGameButton, EndGameWrapper } from "./styled";
import useNewGame from "@/hooks/useNewGame";
import { YouLose, YouWin } from "./variants";
import { createEntranceAnimation } from "@/theme/animations";

const endGameAnimation = createEntranceAnimation("");

function EndGame() {
  const isWinner = useSelector(selectIsWinner);
  const startNewGame = useNewGame();

  return (
    <EndGameWrapper
      animate="in"
      initial="out"
      key="is-over"
      exit="out"
      variants={endGameAnimation}
    >
      {isWinner ? <YouWin /> : <YouLose />}

      <EndGameButton
        size="large"
        onClick={startNewGame}
        fullWidth
        color="primary"
      >
        New game
      </EndGameButton>
    </EndGameWrapper>
  );
}

export default EndGame;
