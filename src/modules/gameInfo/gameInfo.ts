import { Room } from "@/providers/RoomsProvider/types";
import SocketFactory from "@/services/socket";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SocketEvents } from "../socket/types";
import { IAttemp } from "../gameMoves/types";
import { RootState, store } from "@/store/store";
import gameMoves, { clearMoves, gameMovesSlice } from "../gameMoves/gameMoves";

interface GameInfoState {
  isReady: boolean;
  selectedRoom?: string;
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

      socketInstance.socket.emit(SocketEvents.JOIN_ROOM, {
        username: action.payload.username,
        room: action.payload.room.name,
        roomType: action.payload.room.type,
      });
    },
    setRoom(state, action: PayloadAction<string>) {
      state.selectedRoom = action.payload;
    },
    _setIsReady(state, action: PayloadAction<boolean>) {
      state.isReady = action.payload;
    },
    changeTurn(state, action: PayloadAction<boolean>) {
      state.isMyTurn = action.payload;
    },
    resetInfos(state) {
      state.isReady = false;
      state.selectedRoom = undefined;
      state.currentNumber = undefined;
      state.isWinner = undefined;
      state.isOver = undefined;
    },
    setCurrentNumber(state, action: PayloadAction<IAttemp>) {
      state.currentNumber = action.payload.number;
    },
  },
  selectors: {
    selectIsReady: (state) => state.isReady,
    selectRoom: (state) => state.selectedRoom,
    selectCurrentNumber: (state) => state.currentNumber,
    selectIsMyTurn: (state) => state.isMyTurn,
  },
});

//ACTIONS
export const {
  setCurrentNumber,
  attempToChooseRoom,
  setRoom,
  resetInfos,
  changeTurn,
} = gameInfoSlice.actions;

export const setIsReady = createAsyncThunk(
  "data/setIsReady",
  async (payload: boolean, { dispatch, getState }) => {
    const store = getState() as RootState;
    const state = store.gameInfo;

    dispatch(gameInfoSlice.actions._setIsReady(payload));

    if (payload) return;
    if (state.isOver) return;

    // // if isReady is false and game is not over
    // // means the remote user has left, so we clear the infos
    // gameMovesSlice.actions.clearMoves();
    // gameInfoSlice.actions.resetInfos();

    // dispatch(getData());
  },
);

// SELECTORS
export const {
  selectIsReady,
  selectRoom,
  selectIsMyTurn,
  selectCurrentNumber,
} = gameInfoSlice.selectors;

export default gameInfoSlice.reducer;
