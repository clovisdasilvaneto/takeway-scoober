"use client";

import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

import { createEntranceAnimation } from "@/theme/animations";
import { selectIsOver, selectIsReady } from "@/modules/gameInfo/gameInfo";

import { GamePlayEndSelectRoom, GamePlayWrapper } from "./styled";
import Match from "../../screens/Match";
import SelectGameRoom from "../../screens/SelectGameRoom";
import EndGame from "../../screens/EndGame";

const gameRoomAnimation = createEntranceAnimation("translateY(-3rem)");

function GamePlay() {
  const isReady = useSelector(selectIsReady);
  const isOver = useSelector(selectIsOver);

  return (
    <GamePlayWrapper component="article">
      {isOver && <EndGame />}

      <AnimatePresence>
        {isReady ? (
          <motion.div
            animate="in"
            initial="out"
            key="match"
            exit="out"
            variants={gameRoomAnimation}
            transition={{ duration: 0.5 }}
          >
            <Match />
          </motion.div>
        ) : (
          <GamePlayEndSelectRoom
            animate="in"
            initial="out"
            key="select-game-room"
            exit="out"
            variants={gameRoomAnimation}
            transition={{ duration: 0.5 }}
          >
            <SelectGameRoom />
          </GamePlayEndSelectRoom>
        )}
      </AnimatePresence>
    </GamePlayWrapper>
  );
}

export default GamePlay;
