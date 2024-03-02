import React from "react";
import { GamePlayContainer } from "../../components/GamePlay/styled";
import Attemp from "@/components/Attemp";
import GameOptions from "@/components/GameOptions/GameOptions";

function Match() {
  return (
    <>
      <GamePlayContainer>
        <Attemp isLocal />
        {/* <Attemp isLocal={false} />
        <Attemp isLocal />
        <Attemp isLocal={false} />
        <Attemp isLocal /> */}
      </GamePlayContainer>

      <GameOptions />
    </>
  );
}

export default Match;
