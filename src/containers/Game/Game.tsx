"use client";

import React from "react";

import { GameBox } from "./styled";
import Rooms from "./components/Rooms";
import GamePlay from "./components/GamePlay";
import withSocket from "@/HOCs/withSocket";
import { createEntranceAnimation } from "@/theme/animations";

const gameBoxAnimation = createEntranceAnimation("");

function Game() {
  return (
    <GameBox
      animate="in"
      initial="out"
      transition={{ delay: 0.3 }}
      variants={gameBoxAnimation}
      aria-label="game section"
    >
      <Rooms />
      <GamePlay />
    </GameBox>
  );
}

export default withSocket(Game);
