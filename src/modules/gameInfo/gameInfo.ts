import { Room } from "@/providers/RoomsProvider/types";
import SocketFactory, { SocketInterface } from "@/services/socket";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SocketEvents } from "../socket/types";

interface GameInfoState {
  isReady: boolean;
  selectedRoom?: string;
}

const initialState: GameInfoState = {
  isReady: false,
};

const gameInfoSlice = createSlice({
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
    setIsReady(state, action: PayloadAction<boolean>) {
      state.isReady = action.payload;
    },
  },
  selectors: {
    selectIsReady: (state) => state.isReady,
    selectRoom: (state) => state.selectedRoom,
  },
});

//ACTIONS
export const { setIsReady, attempToChooseRoom, setRoom } =
  gameInfoSlice.actions;

// SELECTORS
export const { selectIsReady, selectRoom } = gameInfoSlice.selectors;

export default gameInfoSlice.reducer;
