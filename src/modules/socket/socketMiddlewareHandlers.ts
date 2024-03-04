import { toast } from "react-toastify";
import {
  changeTurn,
  setCurrentNumber,
  setIsReady,
  setRoom,
} from "../gameInfo/gameInfo";
import {
  connectionEstablished,
  connectionLost,
  selectSocketId,
  setSocketUser,
} from "./socket";
import {
  MiddlewareHandlerParams,
  SocketEvents,
  initSocketActionPayload,
  onMessageEvent,
} from "./types";
import { IAttemp } from "../gameMoves/types";
import { addMove } from "../gameMoves/gameMoves";
import { TurnStates, changeTurnPayload } from "../gameInfo/types";

export function initSocketHandler({
  socket,
  store,
  action,
}: MiddlewareHandlerParams<initSocketActionPayload, "socket/initSocket">) {
  socket.on(SocketEvents.CONNECT, () => {
    store.dispatch(setSocketUser(action.payload.username));

    socket.emit(SocketEvents.LOGIN, {
      username: action.payload.username,
    });
  });

  socket.on(SocketEvents.MESSAGE, (params: onMessageEvent) => {
    if (params.socketId) {
      store.dispatch(connectionEstablished(params));
    } else if (params.room) {
      store.dispatch(setRoom(params.room));
    }
  });

  socket.on(SocketEvents.ON_READY, ({ state }: { state: boolean }) => {
    if (state) socket.emit(SocketEvents.LETS_PLAY);

    store.dispatch<any>(setIsReady(state));
  });

  socket.on(SocketEvents.RANDOM_NUMBER, (attemp: IAttemp) => {
    store.dispatch(setCurrentNumber(attemp));
    store.dispatch<any>(addMove(attemp));
  });

  socket.on(SocketEvents.ACTIVATE_YOUR_TURN, (attemp: changeTurnPayload) => {
    const state = store.getState();
    const socketId = selectSocketId(state);

    if (attemp.user === socketId) {
      store.dispatch(changeTurn(attemp.state === TurnStates.PLAY));
    } else if (attemp.state === TurnStates.WAIT) {
      store.dispatch(changeTurn(true));
    }
  });

  // handle all Error events
  socket.on(SocketEvents.ERROR, (error: { message: string }) => {
    // use sentry or something to handle errors
    console.error(error);

    toast.error(error.message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  });

  // Handle disconnect event
  socket.on(SocketEvents.DISCONNECT, (reason: string) => {
    // use sentry or something to handle errors
    console.error(reason);

    toast.error(reason, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    store.dispatch(connectionLost());
  });
}
