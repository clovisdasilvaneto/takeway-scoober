// Slice of store that manages Socket connections
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initSocketActionPayload, onMessageEvent } from "./types";

export interface SocketState {
  isConnected: boolean;
  socketId?: string;
  socketUser?: string;
}

const initialState: SocketState = {
  isConnected: false,
};

// Now create the slice
const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    initSocket: (state, action: PayloadAction<initSocketActionPayload>) => {
      return;
    },
    connectionEstablished: (
      state,
      { payload: { socketId } }: PayloadAction<onMessageEvent>,
    ) => {
      state.isConnected = true;
      state.socketId = socketId;
    },
    connectionLost: (state) => {
      state.isConnected = false;
    },
    setSocketUser: (state, action: PayloadAction<string>) => {
      state.socketUser = action.payload;
    },
  },
  selectors: {
    selectIsConnect: (state) => state.isConnected,
    selectSocketId: (state) => state.socketId,
    selectSocketUser: (state) => state.socketUser,
  },
});

export const {
  initSocket,
  connectionEstablished,
  connectionLost,
  setSocketUser,
} = socketSlice.actions;

export const { selectIsConnect, selectSocketId, selectSocketUser } =
  socketSlice.selectors;

export default socketSlice.reducer;
