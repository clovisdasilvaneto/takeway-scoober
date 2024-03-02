import React from "react";

import { GameBox } from "./styled";
import Rooms from "./components/Rooms";
import GamePlay from "./components/GamePlay";

function Game() {
  return (
    <GameBox>
      <Rooms />
      <GamePlay />
    </GameBox>
  );
}

export default Game;
