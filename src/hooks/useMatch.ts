"use client";

import { useDispatch, useSelector } from "react-redux";
import { sendMove } from "@/modules/gameMoves/gameMoves";
import {
  changeTurn,
  selectCurrentNumber,
  selectIsOver,
} from "@/modules/gameInfo/gameInfo";
import { useEffect } from "react";
import { IAttemp } from "@/modules/gameMoves/types";

const useMatch = (
  moves: IAttemp[],
  gameContainerRef: React.RefObject<HTMLDivElement>,
): ((option: string) => void) => {
  const currentNumber = useSelector(selectCurrentNumber);
  const isOver = useSelector(selectIsOver);
  const dispatch = useDispatch();

  useEffect(() => {
    const scrollGameContainer = () => {
      const container = gameContainerRef.current;

      if (!container) return;

      container.scrollTo({
        left: 0,
        top: container.scrollHeight,
        behavior: "smooth",
      });
    };

    scrollGameContainer();
  }, [gameContainerRef, moves]);

  const onOptionSelected = (option: string) => {
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

  return onOptionSelected;
};

export default useMatch;
