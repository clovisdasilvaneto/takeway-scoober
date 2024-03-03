// Slice of store that manages Socket connections
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initSocketActionPayload, onMessageEvent } from "./types";

export interface SocketState {
  isConnected: boolean;
  socketId?: string;
}

const initialState: SocketState = {
  isConnected: false,
  socketId: undefined,
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
  },
  selectors: {
    selectIsConnect: (state) => state.isConnected,
    selectSocketId: (state) => state.socketId,
  },
});

export const { initSocket, connectionEstablished, connectionLost } =
  socketSlice.actions;

export const { selectIsConnect, selectSocketId } = socketSlice.selectors;

export default socketSlice.reducer;
