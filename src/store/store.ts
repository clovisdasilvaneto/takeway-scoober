import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import socketMiddleware from "@/modules/socket/socketMiddleware";
import socketSlice from "@/modules/socket/socket";
import gameMoves from "@/modules/gameMoves";
import gameInfo from "@/modules/gameInfo";

export const makeStore = () => {
  return configureStore({
    reducer: {
      gameInfo,
      gameMoves,
      socket: socketSlice,
    },
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware().concat([socketMiddleware]);
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const store = makeStore();
