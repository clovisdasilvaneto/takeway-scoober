import { Room } from "@/providers/RoomsProvider/types";
import SocketFactory from "@/services/socket";
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

import { SocketEvents } from "../socket/types";
import { IAttemp } from "../gameMoves/types";
import { gameMovesSlice } from "../gameMoves/gameMoves";
import { finishGamePayload } from "./types";

interface GameInfoState {
  isReady: boolean;
  selectedRoom?: string;
  roomType?: string;
  currentNumber?: number;
  isMyTurn?: boolean;
  isWinner?: boolean;
  isOver?: boolean;
}

const initialState: GameInfoState = {
  isReady: false,
};

export const gameInfoSlice = createSlice({
  name: "gameInfo",
  initialState,
  reducers: {
    attempToChooseRoom(
      state,
      action: PayloadAction<{
        username: string;
        room: Room;
      }>,
    ) {
      const socketInstance = SocketFactory.create();

      if (state.selectedRoom) {
        socketInstance.socket.emit(SocketEvents.LEAVE_ROOM);
      }

      state.roomType = action.payload.room.type;

      socketInstance.socket.emit(SocketEvents.JOIN_ROOM, {
        username: action.payload.username,
        room: action.payload.room.name,
        roomType: action.payload.room.type,
      });
    },
    setRoom(state, action: PayloadAction<string>) {
      state.selectedRoom = action.payload;
    },
    changeTurn(state, action: PayloadAction<boolean>) {
      state.isMyTurn = action.payload;
    },
    resetInfos(state) {
      state.isReady = false;
      state.selectedRoom = undefined;
      state.currentNumber = undefined;
      state.isMyTurn = undefined;
      state.isWinner = undefined;
      state.isOver = undefined;
      state.roomType = undefined;
    },
    setCurrentNumber(state, action: PayloadAction<IAttemp>) {
      state.currentNumber = action.payload.number;
    },
    finishGame(state, action: PayloadAction<finishGamePayload>) {
      const socketInstance = SocketFactory.create();
      socketInstance.socket.emit(SocketEvents.LEAVE_ROOM);

      state.isOver = true;
      state.isWinner = action.payload.isWinner;
    },
    startNewGame() {
      const socketInstance = SocketFactory.create();
      socketInstance.socket.emit(SocketEvents.LEAVE_ROOM);
    },
    // private actions
    _setIsReady(state, action: PayloadAction<boolean>) {
      state.isReady = action.payload;
    },
  },
  selectors: {
    selectIsReady: ({ isReady }) => isReady,
    selectRoom: ({ selectedRoom }) => selectedRoom,
    selectCurrentNumber: ({ currentNumber }) => currentNumber,
    selectIsMyTurn: ({ isMyTurn }) => isMyTurn,
    selectIsOver: ({ isOver }) => isOver,
    selectIsWinner: ({ isWinner }) => isWinner,
  },
});

//ACTIONS
export const {
  setCurrentNumber,
  attempToChooseRoom,
  finishGame,
  setRoom,
  resetInfos,
  changeTurn,
  startNewGame,
} = gameInfoSlice.actions;

export const setIsReady = createAsyncThunk<void, boolean>(
  "data/setIsReady",
  async (payload: boolean, { dispatch, getState }) => {
    const store = getState() as RootState;
    const state = store.gameInfo;

    if (state.isOver) return;

    dispatch(gameInfoSlice.actions._setIsReady(payload));

    if (payload) return;

    // // if isReady is false and game is not over
    // // means the remote user has left, so we clear the infos
    dispatch(gameMovesSlice.actions.clearMoves());
    dispatch(gameInfoSlice.actions.resetInfos());
  },
);

// SELECTORS
export const {
  selectIsReady,
  selectRoom,
  selectIsMyTurn,
  selectCurrentNumber,
  selectIsOver,
  selectIsWinner,
} = gameInfoSlice.selectors;

export default gameInfoSlice.reducer;
