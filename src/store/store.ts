import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import slice from "@/containers/SinglePlayer/slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: slice,
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
