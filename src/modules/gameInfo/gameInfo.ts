import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface GameInfoState {
  isReady: boolean;
}

const initialState: GameInfoState = {
  isReady: false,
};

const gameInfoSlice = createSlice({
  name: "gameInfo",
  initialState,
  reducers: {
    setIsReady(state, action: PayloadAction<boolean>) {
      state.isReady = action.payload;
    },
  },
  selectors: {
    selectIsReady: (state) => state.isReady,
  },
});

//ACTIONS
export const { setIsReady } = gameInfoSlice.actions;

// SELECTORS
export const { selectIsReady } = gameInfoSlice.selectors;

export default gameInfoSlice.reducer;
