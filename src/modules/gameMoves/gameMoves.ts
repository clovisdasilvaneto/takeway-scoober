import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AsyncThunkAction, PayloadAction } from "@reduxjs/toolkit";
import { IAttemp, sendNumberPayload } from "./types";
import SocketFactory from "@/services/socket";
import { SocketEvents } from "../socket/types";
import { RootState } from "@/store/store";
import { finishGame } from "../gameInfo/gameInfo";

type gamesMovesSlice = {
  moves: IAttemp[];
};

const initialState: gamesMovesSlice = {
  moves: [],
};

export const gameMovesSlice = createSlice({
  name: "gameMoves",
  initialState,
  reducers: {
    _addMove(state, action: PayloadAction<IAttemp>) {
      state.moves.push(action.payload);
    },
    sendMove(
      state,
      { payload: { number, selectedNumber } }: PayloadAction<sendNumberPayload>,
    ) {
      const socketInstance = SocketFactory.create();

      socketInstance.socket.emit(SocketEvents.SEND_NUMBER, {
        number,
        selectedNumber,
      });
    },
    clearMoves(state) {
      state.moves = [];
    },
  },
  selectors: {
    selectMoves: (state) => state.moves,
  },
});

//ACTIONS
export const { clearMoves, sendMove } = gameMovesSlice.actions;

export const addMove = createAsyncThunk(
  "data/setIsReady",
  async (payload: IAttemp, { dispatch, getState }) => {
    const { gameInfo, socket } = getState() as RootState;
    const isLastNumber = payload.number === 1;
    const hasIncorrectResult = !payload.isCorrectResult && !payload.isFirst;
    const isLocalAttemp = payload.user === socket.socketUser;

    if (payload.isFirst) dispatch(gameMovesSlice.actions.clearMoves());

    if (gameInfo.isOver) return;

    if (hasIncorrectResult || isLastNumber)
      dispatch(
        finishGame({
          isWinner:
            (!isLocalAttemp && hasIncorrectResult) ||
            (isLocalAttemp && isLastNumber),
        }),
      );

    dispatch(gameMovesSlice.actions._addMove(payload));
  },
);

// SELECTORS
export const { selectMoves } = gameMovesSlice.selectors;

export default gameMovesSlice.reducer;
