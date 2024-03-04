import React from "react";
import { GamePlayContainer } from "../../components/GamePlay/styled";
import Attemp from "@/components/Attemp";
import GameOptions from "@/components/GameOptions/GameOptions";
import { useDispatch, useSelector } from "react-redux";
import { selectMoves, sendMove } from "@/modules/gameMoves/gameMoves";
import { IAttemp } from "@/modules/gameMoves/types";
import BaseNumber from "./BaseNumber";
import {
  changeTurn,
  selectCurrentNumber,
  selectIsMyTurn,
  selectIsOver,
} from "@/modules/gameInfo/gameInfo";
import { useSession } from "next-auth/react";
import AttempLoading from "@/components/Attemp/AttempLoading";

function Match() {
  const moves = useSelector(selectMoves);
  const currentNumber = useSelector(selectCurrentNumber);
  const isOver = useSelector(selectIsOver);
  const session = useSession();
  const isMyTurn = useSelector(selectIsMyTurn);
  const dispatch = useDispatch();

  const handleSelectedOption = (option: string) => {
    if (isOver) return;

    const selectedNumber = parseInt(option);

    dispatch(changeTurn(false));
    dispatch(
      sendMove({
        selectedNumber,
        number: currentNumber as number,
      }),
    );
  };

  const isLastMoveFromUser =
    moves.length && moves[moves.length - 1].user === session.data?.user?.name;

  return (
    <>
      <GamePlayContainer>
        {moves.map((move: IAttemp, index) =>
          move.isFirst ? (
            <BaseNumber key={`${move.number}-${index}`} number={move.number} />
          ) : (
            <Attemp
              number={moves[index - 1].number}
              selectedOption={move.selectedNumber}
              result={move.number}
              key={`${move.number}-${index}`}
              isLocal={move.user === session.data?.user?.name}
            />
          ),
        )}

        {!isMyTurn && !isOver && (
          <AttempLoading isLocal={!isLastMoveFromUser} />
        )}
      </GamePlayContainer>

      {(isMyTurn || isOver) && (
        <GameOptions onOptionSelected={handleSelectedOption} />
      )}
    </>
  );
}

export default Match;
