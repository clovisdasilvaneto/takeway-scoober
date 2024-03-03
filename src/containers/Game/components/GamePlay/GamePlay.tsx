"use client";

import React from "react";
import { selectIsReady } from "@/modules/gameInfo/gameInfo";
import { useSelector } from "react-redux";

import { GamePlayWrapper } from "./styled";
import Match from "../../screens/Match";
import SelectGameRoom from "../../screens/SelectGameRoom";

function GamePlay() {
  const isReady = useSelector(selectIsReady);

  return (
    <GamePlayWrapper component="article">
      {/* TODO: check for gameover and win */}
      {isReady ? <Match /> : <SelectGameRoom />}
    </GamePlayWrapper>
  );
}

export default GamePlay;
