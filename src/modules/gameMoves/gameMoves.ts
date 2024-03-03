import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAttemp, sendNumberPayload } from "./types";
import SocketFactory from "@/services/socket";
import { SocketEvents } from "../socket/types";

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
    addMove(state, action: PayloadAction<IAttemp>) {
      if (action.payload.isFirst && state.moves.length) return;

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
export const { addMove, clearMoves, sendMove } = gameMovesSlice.actions;

// SELECTORS
export const { selectMoves } = gameMovesSlice.selectors;

export default gameMovesSlice.reducer;
