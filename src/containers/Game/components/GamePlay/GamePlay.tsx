"use client";

import React from "react";
import { selectIsOver, selectIsReady } from "@/modules/gameInfo/gameInfo";
import { useSelector } from "react-redux";

import { GamePlayWrapper } from "./styled";
import Match from "../../screens/Match";
import SelectGameRoom from "../../screens/SelectGameRoom";
import EndGame from "../../screens/EndGame";

function GamePlay() {
  const isReady = useSelector(selectIsReady);
  const isOver = useSelector(selectIsOver);

  return (
    <GamePlayWrapper component="article">
      {isOver && <EndGame />}

      {isReady ? <Match /> : <SelectGameRoom />}
    </GamePlayWrapper>
  );
}

export default GamePlay;
