import React, { useRef } from "react";
import { GamePlayContainer } from "../../components/GamePlay/styled";
import Attemp from "@/components/Attemp";
import GameOptions from "@/components/GameOptions/GameOptions";
import { useSelector } from "react-redux";
import { selectMoves } from "@/modules/gameMoves/gameMoves";
import { IAttemp } from "@/modules/gameMoves/types";
import BaseNumber from "./BaseNumber";
import { selectIsMyTurn, selectIsOver } from "@/modules/gameInfo/gameInfo";
import { useSession } from "next-auth/react";
import AttempLoading from "@/components/Attemp/AttempLoading";
import { GamePlayOverflowContainer } from "./styled";
import useMatch from "@/hooks/useMatch";
import { createEntranceAnimation } from "@/theme/animations";
import { motion } from "framer-motion";

const localAnimation = createEntranceAnimation("translateX(-3rem)");
const remoteAnimation = createEntranceAnimation("translateX(3rem)");

function Match() {
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const moves = useSelector(selectMoves);
  const isOver = useSelector(selectIsOver);
  const session = useSession();
  const isMyTurn = useSelector(selectIsMyTurn);
  const onOptionSelected = useMatch(moves, gameContainerRef);

  const isFirstMove = moves.length > 1;
  const isLastMoveFromRemote =
    moves.length && moves[moves.length - 1].user === session.data?.user?.name;

  return (
    <GamePlayOverflowContainer>
      <GamePlayContainer ref={gameContainerRef}>
        {moves.map((move: IAttemp, index) =>
          move.isFirst ? (
            <BaseNumber key={`${move.number}-${index}`} number={move.number} />
          ) : (
            <motion.div
              animate="in"
              initial="out"
              key={`${move.number}-${index}`}
              variants={
                move.user === session.data?.user?.name
                  ? localAnimation
                  : remoteAnimation
              }
              transition={{ duration: 0.5 }}
            >
              <Attemp
                number={moves[index - 1].number}
                key={`${move.number}-${index}`}
                selectedOption={move.selectedNumber}
                result={move.number}
                isLocal={move.user === session.data?.user?.name}
              />
            </motion.div>
          ),
        )}

        {!isMyTurn && !isOver && (
          <motion.div
            animate="in"
            initial="out"
            variants={isLastMoveFromRemote ? localAnimation : remoteAnimation}
            transition={{ duration: 0.5 }}
          >
            <AttempLoading isLocal={!isLastMoveFromRemote && isFirstMove} />
          </motion.div>
        )}
      </GamePlayContainer>

      {(isMyTurn || isOver) && (
        <GameOptions onOptionSelected={onOptionSelected} />
      )}
    </GamePlayOverflowContainer>
  );
}

export default Match;
