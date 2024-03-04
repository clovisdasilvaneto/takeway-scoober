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
    const { gameMoves, gameInfo, socket } = getState() as RootState;

    if ((payload.isFirst && gameMoves.moves.length) || gameInfo.isOver) return;

    if (!payload.isCorrectResult && !payload.isFirst)
      dispatch(
        finishGame({
          isWinner: payload.user !== socket.socketUser,
        }),
      );

    dispatch(gameMovesSlice.actions._addMove(payload));
  },
);

// SELECTORS
export const { selectMoves } = gameMovesSlice.selectors;

export default gameMovesSlice.reducer;
