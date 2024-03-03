"use client";

import React from "react";

import { GameBox } from "./styled";
import Rooms from "./components/Rooms";
import GamePlay from "./components/GamePlay";
import withSocket from "@/HOCs/withSocket";

function Game() {
  return (
    <GameBox component="section" aria-label="game section">
      <Rooms />
      <GamePlay />
    </GameBox>
  );
}

export default withSocket(Game);
