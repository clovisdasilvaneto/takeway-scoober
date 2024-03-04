import { resetInfos, startNewGame } from "@/modules/gameInfo/gameInfo";
import { clearMoves } from "@/modules/gameMoves/gameMoves";
import { useDispatch } from "react-redux";

const useNewGame = (): (() => void) => {
  const dispatch = useDispatch();

  const onStartNewGame = () => {
    dispatch(resetInfos());
    dispatch(clearMoves());
    dispatch(startNewGame());
  };

  return onStartNewGame;
};

export default useNewGame;
