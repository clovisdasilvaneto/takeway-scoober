import { selectIsWinner } from "@/modules/gameInfo/gameInfo";
import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { EndGameButton, EndGameWrapper } from "./styled";
import useNewGame from "@/hooks/useNewGame";

function EndGame() {
  const isWinner = useSelector(selectIsWinner);
  const startNewGame = useNewGame();

  return (
    <EndGameWrapper>
      <Typography variant="h3" fontWeight={700} color="common.white">
        You {isWinner ? "won" : "lose"}
      </Typography>
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
